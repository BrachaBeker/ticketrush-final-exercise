const { calcTotal, maxTickets } = require('../js/pricing');

test('member: 2 tickets cost 584', function () { assertEq(calcTotal(2, true), 584); });
test('regular: 2 tickets cost 724', function () { assertEq(calcTotal(2, false), 724); });
test('member over quota returns null', function () { assertEq(calcTotal(5, true), null); });
test('zero tickets returns null', function () { assertEq(calcTotal(0, false), null); });
test('regular over 8 returns null', function () { assertEq(calcTotal(9, false), null); });
test('member quota is 4', function () { assertEq(maxTickets(true), 4); });
