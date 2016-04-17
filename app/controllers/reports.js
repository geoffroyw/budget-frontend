import Ember from 'ember';

/* global moment, d3 */
export default Ember.Controller.extend({
  transactions: Ember.computed.alias('model.transactions'),
  accounts: Ember.computed.alias('model.bankAccounts'),
  paymentMeans: Ember.computed.alias('model.paymentMeans'),
  categories: Ember.computed.alias('model.categories'),


  from: moment().subtract(1, 'year').toDate(),
  to: new Date(),

  dateInvalidMessage: Ember.computed('from', 'to', function () {
    if (moment(this.get('from')).isAfter(moment(this.get('to')))) {
      return 'Date From must be before Date to';
    }
    return '';
  }),

  lineData: null,


  transactionChartData: [],

  expenseByCategoryData: [],

  incomeByCategoryData: [],

  actions: {
    computeTransactionChartData() {
      let _this = this;
      let filteredTransactions = this.get('transactions').filter(function (item) {
        let itemDate = moment(item.get('date'));
        return itemDate.isSameOrAfter(_this.get('from')) && itemDate.isSameOrBefore(_this.get('to'));
      });

      let ret = [];

      this.get('paymentMeans').forEach(function (paymentMean) {
        for (let m = moment(_this.get('from')).startOf('month'); m.isSameOrBefore(moment(_this.get('to')).startOf('month')); m.add(1, 'months')) {

          let day = m.startOf('month').format('DD');
          let month = m.startOf('month').format('MM');
          let year = m.startOf('month').format('YYYY');

          let data = {
            time: d3.time.format('%Y-%m-%d').parse(moment(new Date(year, month - 1, day)).format('YYYY-MM-DD')),
            label: paymentMean.get('name'),
            value: 0,
            type: 'money'
          };

          ret.push(data);

        }


      });


      filteredTransactions.forEach(function (transaction) {
        let data = {time: '', label: '', value: 0, type: 'money'};
        ret.forEach(function (alreadyComputedData) {
          if (moment(alreadyComputedData.time).format("YYYY-MM") === moment(transaction.get('date')).format("YYYY-MM") && alreadyComputedData.label === transaction.get('payment_mean.name')) {
            data = alreadyComputedData;
            data['value'] += (transaction.get('amount_cents') / 100);
          }
        });
      });

      ret = ret.sort(function (a, b) {
        let aMoment = moment(a.time);

        let bMoment = moment(b.time);

        if (aMoment.isSame(bMoment, 'day')) {
          return a.label.localeCompare(b.label);
        }

        if (aMoment.isBefore(bMoment)) {
          return -1;
        }

        return 1;

      });
      this.set('transactionChartData', ret);
    },

    computeReport() {
      "use strict";

      if (moment(this.get('from')).isAfter(moment(this.get('to')))) {
        return;
      }
      this.send('computeTransactionChartData');
      this.send('computeCategoryData');
    },

    computeCategoryData() {
      "use strict";

      let _this = this;

      let incomes = [];
      let expenses = [];

      this.get('categories').forEach(function (category) {
        let filteredTransactions = category.get('transactions').filter(function (item) {
          let itemDate = moment(item.get('date'));
          return itemDate.isSameOrAfter(_this.get('from')) && itemDate.isSameOrBefore(_this.get('to'));
        });

        let currentCategoryIncomes = {label: category.get('name'), value: 0, type: 'money'};
        let currentCategoryExpenses = {label: category.get('name'), value: 0, type: 'money'};

        filteredTransactions.forEach(function (transaction) {
          if (transaction.get('amount_cents') < 0) {
            currentCategoryExpenses['value'] += -1*(transaction.get('amount_cents') / 100);
          } else {
            currentCategoryIncomes['value'] += (transaction.get('amount_cents') / 100);
          }
        });

        incomes.push(currentCategoryIncomes);
        expenses.push(currentCategoryExpenses);


      });
      console.log(expenses);
      console.log(incomes);

      this.set('incomeByCategoryData', incomes);
      this.set('expenseByCategoryData', expenses);
    }
  }

});
