import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('recurring-transaction-table-row', 'Integration | Component | recurring transaction table row', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{recurring-transaction-table-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#recurring-transaction-table-row}}
      template block text
    {{/recurring-transaction-table-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
