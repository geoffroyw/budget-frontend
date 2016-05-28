import { contains } from 'budget-frontend/helpers/contains';
import { module, test } from 'qunit';

module('Unit | Helper | contains');

// Replace this with your real tests.
test('it is true if the list contains the object', function(assert) {
  let result = contains([42, 43, 44], 42);
  assert.ok(result);
});


test('it is false if the list does not contain the object', function(assert) {
  let result = contains([43, 44], 42);
  assert.notOk(result);
});
