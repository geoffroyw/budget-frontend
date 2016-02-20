import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  isActiveObserver: Ember.observer('model.isActive', function () {
    "use strict";
    let model = this.get('model');

    const flashMessages = Ember.get(this, 'flashMessages');

    let enabledDisabled = model.get('isActive') ? 'enabled' : 'disabled';
    let enablingDisabling = model.get('isActive') ? 'enabling' : 'disabling';

    model.save().then(function () {
      flashMessages.success('Recurring transaction ' + model.get('description') + ' has been successfully ' + enabledDisabled + '.');
    }).catch(function () {
      flashMessages.danger('Error while ' + enablingDisabling + ' recurring transaction ' + model.get('description') + '. Please try again.');
      model.rollbackAttributes();
    });
  })
});
