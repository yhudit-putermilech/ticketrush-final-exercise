const { joinWaitlist } = require('../js/waitlist');

test('trims and lowercases email', function () { assertEq(JSON.stringify(joinWaitlist([], '  Alice@Example.COM  ')), JSON.stringify(['alice@example.com'])); });
test('returns a new array without changing the input', function () { const list = ['existing@example.com']; const result = joinWaitlist(list, 'New@Example.com'); if (result === list) throw new Error('expected a new array'); assertEq(JSON.stringify(list), JSON.stringify(['existing@example.com'])); });
test('rejects an address without an at sign', function () { assertEq(JSON.stringify(joinWaitlist(['x@example.com'], 'invalid.example.com')), JSON.stringify(['x@example.com'])); });
test('rejects an address without a dot after at sign', function () { assertEq(JSON.stringify(joinWaitlist([], 'alice@example')), JSON.stringify([])); });
test('does not add an existing address twice', function () { assertEq(JSON.stringify(joinWaitlist(['Alice@Example.com'], ' alice@example.COM ')), JSON.stringify(['Alice@Example.com'])); });
test('invalid input also returns a new array', function () { const list = []; const result = joinWaitlist(list, 'invalid'); if (result === list) throw new Error('expected a new array'); });
