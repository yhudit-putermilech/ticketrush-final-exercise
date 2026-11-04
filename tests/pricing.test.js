const { calcTotal, maxTickets } = require('../js/pricing');

test('two regular tickets cost 724', function () { assertEq(calcTotal(2, false, false), 724); });
test('one regular ticket costs 362', function () { assertEq(calcTotal(1, false, false), 362); });
test('two member tickets cost 584', function () { assertEq(calcTotal(2, true, false), 584); });
test('one member ticket costs 292 including service fee', function () { assertEq(calcTotal(1, true, false), 292); });
test('two student tickets cost 619', function () { assertEq(calcTotal(2, false, true), 619); });
test('one student ticket costs 309.5 including service fee', function () { assertEq(calcTotal(1, false, true), 309.5); });
test('member discount wins when both discounts apply', function () { assertEq(calcTotal(2, true, true), 584); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(false), 8); });
test('members may buy up to 6', function () { assertEq(maxTickets(true), 6); });
test('member maximum is valid', function () { assertEq(calcTotal(6, true, false), 1752); });
test('member quantity 5 remains valid', function () { assertEq(calcTotal(5, true, false), 1460); });
test('member quantity above maximum is rejected', function () { assertEq(calcTotal(7, true, false), null); });
test('regular quantity above maximum is rejected', function () { assertEq(calcTotal(9, false, false), null); });
test('zero quantity is rejected', function () { assertEq(calcTotal(0, false, false), null); });
test('negative quantity is rejected', function () { assertEq(calcTotal(-1, false, false), null); });
test('fractional quantity is rejected', function () { assertEq(calcTotal(1.5, false, false), null); });

