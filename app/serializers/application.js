import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  keyForAttribute(attr) {
    return Ember.String.camelize(attr);
  },

  keyForRelationship(key) {
    return Ember.String.camelize(key);
  }
});
