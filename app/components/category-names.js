import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  categories: undefined,

  names: Ember.computed.mapBy('categories', 'name'),

  nameStr: Ember.computed('names', function () {
    "use strict";
    return this.get('names').join(', ');
  })

});
