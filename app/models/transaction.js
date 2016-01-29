import DS from 'ember-data';

export default DS.Model.extend({
  amount_cents: DS.attr('integer'),
  currency: DS.attr('string'),
  date: DS.attr('date'),
  name: DS.attr('string'),
  created_at: DS.attr('date', {readOnly: true}),
  updated_at: DS.attr('date', {readOnly: true})

});
