import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  login: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  password_confirm: DS.attr('string'),


  passwordMatches: Ember.computed('password', 'password_confirm', function () {
    "use strict";
    return this.get('password') === this.get('password_confirm');
  }),

  hasValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),

  isValid: Ember.computed('passwordMatches', 'hasValidEmail', 'login', function () {
    "use strict";
    return this.get('login') !== undefined && this.get('login').trim() !== '' && this.get('passwordMatches') && this.get('hasValidEmail');
  }),

  isInvalid: Ember.computed.not('isValid')

});
