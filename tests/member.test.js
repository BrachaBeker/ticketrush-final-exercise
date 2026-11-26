const { calcTotal, maxTickets } = require('../js/pricing');

test('member: 2 tickets cost 584', function () { assertEq(calcTotal(2, true), 584); });
test('regular: 2 tickets cost 724', function () { assertEq(calcTotal(2, false), 724); });
test('member over quota (7) returns null', function () { assertEq(calcTotal(7, true), null); });
test('zero tickets returns null', function () { assertEq(calcTotal(0, false), null); });
test('regular over 8 returns null', function () { assertEq(calcTotal(9, false), null); });
test('member quota is 6', function () { assertEq(maxTickets(true), 6); });
test('member may buy 6 tickets', function () { assertEq(calcTotal(6, true), 1752); });
