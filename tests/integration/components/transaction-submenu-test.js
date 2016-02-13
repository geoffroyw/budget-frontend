import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('transaction-submenu', 'Integration | Component | transaction submenu', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{transaction-submenu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#transaction-submenu}}
      template block text
    {{/transaction-submenu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
