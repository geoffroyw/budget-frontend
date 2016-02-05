import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('payment-mean-form', 'Integration | Component | payment mean form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{payment-mean-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#payment-mean-form}}
      template block text
    {{/payment-mean-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
