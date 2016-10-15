import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['parent'],
  classNameBindings: ['isOpen:open'],
  isOpen: false,

  subMenuStyle: Ember.computed('isOpen', function () {
    "use strict";
    if (this.get('isOpen')) {
      return new Ember.String.htmlSafe('display: block;');
    }
    return new Ember.String.htmlSafe('');
  }),

  actions: {
    openSubMenu() {
      "use strict";
      this.toggleProperty('isOpen');
    }
  }
});
