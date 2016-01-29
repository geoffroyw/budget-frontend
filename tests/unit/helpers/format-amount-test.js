import { formatAmount } from '../../../helpers/format-amount';
import { module, test } from 'qunit';

module('Unit | Helper | format amount');

// Replace this with your real tests.
test('it adds 0 dot if 2 decimal', function(assert) {
  let result = formatAmount([42]);
  assert.equal(result, '0.42');
});

test('it formats one decimal number as 0.0x', function(assert) {
  let result = formatAmount([2]);
  assert.equal(result, '0.02');
});

test('it adds a dot to separate decimals', function(assert) {
  let result = formatAmount([2242]);
  assert.equal(result, '22.42');
});