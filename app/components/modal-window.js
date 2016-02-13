import Ember from 'ember';

export default Ember.Component.extend({
  show: function () {
    "use strict";
    this.$('.modal').modal().on('hidden.bs.modal', function () {
      this.sendAction('close');
    }.bind(this));
  }.on('didInsertElement'),


  actions: {
    ok() {
      "use strict";
      this.$('.modal').modal('hide');
      this.sendAction('ok');
    }
  }
});
