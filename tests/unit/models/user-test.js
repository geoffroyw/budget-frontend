import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});


test('passwordMatches', function(assert) {
  let model = this.subject({password: 'test', password_confirm: 'test'});
  // let store = this.store();
  assert.ok(!!model.get('passwordMatches'));
});

test('passwordMatches false', function(assert) {
  let model = this.subject({password: 'test', password_confirm: 'something else'});
  // let store = this.store();
  assert.notOk(!!model.get('passwordMatches'));
});
