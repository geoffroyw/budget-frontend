import { formatAmount } from '../../../helpers/format-amount';
import { module, test } from 'qunit';

module('Unit | Helper | format amount');

// Replace this with your real tests.
test('it adds 0 dot if 2 decimal', function(assert) {
  let result = formatAmount([42]);
  assert.equal(result, '0.42 EUR');
});

test('it formats one decimal number as 0.0x', function(assert) {
  let result = formatAmount([2]);
  assert.equal(result, '0.02 EUR');
});

test('it adds a dot to separate decimals', function(assert) {
  let result = formatAmount([2242]);
  assert.equal(result, '22.42 EUR');
});

test('it uses the currency in parameter', function(assert) {
  let result = formatAmount([2242, 'USD']);
  assert.equal(result, '22.42 USD');
});