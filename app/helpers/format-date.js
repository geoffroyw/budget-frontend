import Ember from 'ember';
/* global moment */

export function formatDate(params/*, hash*/) {
  let date = params[0];
  let format = params[1];
  if (date === undefined) {
    return "";
  }
  return moment(date).format(format);
}

export default Ember.Helper.helper(formatDate);
