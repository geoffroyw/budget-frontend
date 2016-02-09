import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model() {
    "use strict";
    return this.store.findAll('BankAccount');
  }
});
