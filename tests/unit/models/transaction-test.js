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


test('is income is true if type === INCOME', function (assert) {
  "use strict";
  let model = this.subject({type: 'INCOME'});
  // let store = this.store();
  assert.ok(!!model.get('isIncome'));
});


test('is income is false if type !== INCOME', function (assert) {
  "use strict";
  let model = this.subject({type: 'FOO'});
  // let store = this.store();
  assert.notOk(!!model.get('isIncome'));
});


test('is expense is true if type === EXPENSE', function (assert) {
  "use strict";
  let model = this.subject({type: 'EXPENSE'});
  // let store = this.store();
  assert.ok(!!model.get('isExpense'));
});


test('is expense is false if type !== INCOME', function (assert) {
  "use strict";
  let model = this.subject({type: 'FOO'});
  // let store = this.store();
  assert.notOk(!!model.get('isExpense'));
});