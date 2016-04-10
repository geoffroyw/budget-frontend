import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  isSubMenuOpen: false,
  subMenuClass: Ember.computed('isSubMenuOpen', function () {
    "use strict";
    if (this.get('isSubMenuOpen')) {
      return 'open';
    }
    return '';
  }),

  subMenuStyle: Ember.computed('isSubMenuOpen', function () {
    "use strict";
    if (this.get('isSubMenuOpen')) {
      return new Ember.Handlebars.SafeString('display: block');
    }
    return new Ember.Handlebars.SafeString('');
  }),


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
    },

    toggleSubMenu() {
      "use strict";
      this.toggleProperty('isSubMenuOpen');
    },

    error(error) {
      "use strict";
      if (error) {
        return this.transitionTo('errorPage');
      }
    }
  }
});
