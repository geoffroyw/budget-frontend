import { moduleForModel, test } from 'ember-qunit';

moduleForModel('recurring-transaction', 'Unit | Model | recurring transaction', {
  // Specify the other units that are required for this test.
  needs: ['model:PaymentMean', 'model:BankAccount', 'model:Category']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
