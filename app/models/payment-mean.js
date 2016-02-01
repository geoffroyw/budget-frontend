import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  currency: DS.attr('string'),
  transactions: DS.hasMany('transaction'),
  created_at: DS.attr('date', {readOnly: true}),
  updated_at: DS.attr('date', {readOnly: true})
});
