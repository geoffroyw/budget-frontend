import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['alertType'],


  alertType: Ember.computed('flash.type', function() {
    "use strict";
    return 'alert alert-' + this.get('flash.type');
  })
});
