import Ember from 'ember';

/* global moment, d3 */
export default Ember.Controller.extend({
  transactions: Ember.computed.alias('model.transactions'),
  accounts: Ember.computed.alias('model.bankAccounts'),
  paymentMeans: Ember.computed.alias('model.paymentMeans'),
  categories: Ember.computed.alias('model.categories'),


  from: undefined,
  to: new Date(),

  lineData: null,


  transactionChartData: Ember.computed('transactions', function () {
    "use strict";

    let ret = [];


    this.get('paymentMeans').forEach(function (paymentMean) {


      paymentMean.get('transactions').forEach(function (transaction) {
        let data = {time: '', label: '', value: 0, type: 'money'};
        let updated = false;


        ret.forEach(function (alreadyComputedDate) {

          if (moment(alreadyComputedDate.time).format("YYYY-MM") === moment(transaction.get('date')).format("YYYY-MM") && alreadyComputedDate.label === paymentMean.get('name')) {
            data = alreadyComputedDate;
            data['value'] += (transaction.get('amount_cents') / 100);
            updated = true;

          }
        });
        if (!updated) {
          let day = moment(transaction.get('date')).startOf('month').format('DD');
          let month = moment(transaction.get('date')).startOf('month').format('MM');
          let year = moment(transaction.get('date')).startOf('month').format('YYYY');

          data.time = d3.time.format('%Y-%m-%d').parse(moment(new Date(year, month - 1, day)).format('YYYY-MM-DD'));
          data.value = (transaction.get('amount_cents') / 100);
          data.label = paymentMean.get('name');
          data.type = 'money';
          ret.push(data);
        }
      });


    });

    ret = ret.sort(function (a, b) {
      if (a.time === b.time) {
        return a.label >b.label ? 1: -1;
      }
      return a.time > b.time ? 1 : -1;
    });
    return ret;
  })


});
