import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    "use strict";
    var a = Ember.A();
    for (var i = 0; i < 10; i++) {
      a.push(this.store.createRecord('transaction', {
        date: new Date(),
        description: 'foo bar baz',
        amount_cents: 101343,
        currency: "USD"
      }));
    }
    return a;
  }
});
