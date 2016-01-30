import { moduleForModel, test } from 'ember-qunit';

moduleForModel('bank-account', 'Unit | Model | bank account', {
  // Specify the other units that are required for this test.
  needs: ['model:transaction']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
