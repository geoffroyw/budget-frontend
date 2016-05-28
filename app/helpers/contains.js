import Ember from 'ember';

export function contains(list, value) {
  return list.contains(value);
}

export default Ember.Helper.helper(contains);
