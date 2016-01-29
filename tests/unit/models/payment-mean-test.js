import { moduleForModel, test } from 'ember-qunit';

moduleForModel('payment-mean', 'Unit | Model | payment mean', {
  // Specify the other units that are required for this test.
  needs: ['model:transaction']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
