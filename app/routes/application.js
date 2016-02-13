import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  actions: {
    showModal(name, model) {
      "use strict";
      this.render(name, {
        into: 'application',
        outlet: 'modal',
        model: model
      });

    },

    renderModal(name, attrs) {
      "use strict";
      this.render(name, attrs);
    },

    removeModal() {
      "use strict";
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
