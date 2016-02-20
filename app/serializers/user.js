import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  keyForAttribute(attr) {
    return Ember.String.camelize(attr);
  },

  keyForRelationship(key) {
    return Ember.String.camelize(key);
  }
});
