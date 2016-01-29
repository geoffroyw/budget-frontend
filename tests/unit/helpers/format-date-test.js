import { formatDate } from '../../../helpers/format-date';
import { module, test } from 'qunit';

/* global moment */

module('Unit | Helper | format date');

// Replace this with your real tests.
test('it formats date in the given format with moment', function(assert) {
  let date = new Date();
  let result = formatDate([date, 'L']);
  assert.equal(result, moment(date).format('L'));

  result = formatDate([date, 'LL']);
  assert.equal(result, moment(date).format('LL'));
});
