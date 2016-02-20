import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    signup() {
      "use strict";
      if (this.get('model.isInvalid')) {

      } else {
        var _this = this;
        this.get('model').save().then(function () {
          let username = _this.get('model.login');
          let password = _this.get('model.password');
          _this.get('session').authenticate('authenticator:oauth2', username, password).catch((reason) => {
            _this.set('errorMessage', reason.error || reason);
          });
        }).catch(function (reason) {
          _this.set('errorMessage', reason.error || reason);
        });
      }
    }
  }
});
