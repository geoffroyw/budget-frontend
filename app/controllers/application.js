import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),


  actions: {
    invalidateSession() {
      "use strict";
      this.get('session').invalidate();
    }
  }
});
