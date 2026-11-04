# Review: Refund calculation

- **Bug (`js/refund.js:8`):** `calcRefund` applies the 90% refund rate to both the ticket price and the service fee, despite the file comment saying the service fee is not refunded. One ticket returns 325.8 instead of 315; two return 651.6 instead of 630. The refund should be calculated from ticket price only.
- **Test results:** `node tests/run.js` reports 3 passed and 4 failed. Both refund tests fail due to the formula above. The two formatting tests also fail because the base branch formats ticket prices as zero; that issue is unrelated to the refund change.
