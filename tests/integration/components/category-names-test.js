import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('category-names', 'Integration | Component | category names', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.set('categories', [{'name': 'name2'}]);

  this.render(hbs`{{category-names}}`);

  assert.equal(this.$().text().trim(), 'name1, name2');

  // Template block usage:"
  this.render(hbs`
    {{#category-names}}
      template block text
    {{/category-names}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
