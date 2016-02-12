import { moduleForModel, test } from 'ember-qunit';

moduleForModel('transaction', 'Unit | Model | transaction', {
  // Specify the other units that are required for this test.
  needs: ['model:payment-mean', 'model:bank-account', 'model:category']
});

test('it exists', function (assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});


test('is income is true if amount_cents > 0', function (assert) {
  "use strict";
  let model = this.subject({amount_cents: 10});
  // let store = this.store();
  assert.ok(!!model.get('isIncome'));
});

test('is income is true if amount_cents == 0', function (assert) {
  "use strict";
  let model = this.subject({amount_cents: 0});
  // let store = this.store();
  assert.ok(!!model.get('isIncome'));
});

test('is expense is true if amount_cents < 0', function (assert) {
  "use strict";
  let model = this.subject({amount_cents: -1});
  // let store = this.store();
  assert.ok(!!model.get('isExpense'));
});
