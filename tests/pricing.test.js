const { calcTotal, maxTickets } = require('../js/pricing');

test('two regular tickets cost 724', function () { assertEq(calcTotal(2, false), 724); });
test('one regular ticket costs 362', function () { assertEq(calcTotal(1, false), 362); });
test('two member tickets cost 584', function () { assertEq(calcTotal(2, true), 584); });
test('one member ticket costs 292 including service fee', function () { assertEq(calcTotal(1, true), 292); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(false), 8); });
test('members may buy up to 4', function () { assertEq(maxTickets(true), 4); });
test('member maximum is valid', function () { assertEq(calcTotal(4, true), 1168); });
test('member quantity above maximum is rejected', function () { assertEq(calcTotal(5, true), null); });
test('regular quantity above maximum is rejected', function () { assertEq(calcTotal(9, false), null); });
test('zero quantity is rejected', function () { assertEq(calcTotal(0, false), null); });
test('negative quantity is rejected', function () { assertEq(calcTotal(-1, false), null); });
test('fractional quantity is rejected', function () { assertEq(calcTotal(1.5, false), null); });
