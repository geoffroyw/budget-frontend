import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['mail-inbox'],

  title: '',

  transactions: undefined,

  searchCriteria: '',

  sortingKey: ['date:desc'],
  sortedTransactions: Ember.computed.sort('transactions', 'sortingKey'),

  filteredTransactions: Ember.computed('searchCriteria', 'sortedTransactions', function () {
    "use strict";
    let filter = this.get('searchCriteria');

    if (filter === undefined || filter === null || filter === '') {
      return this.get('sortedTransactions');
    }

    let regex = new RegExp(filter, 'i');

    return this.get('sortedTransactions').filter(function (item) {
      let categoryMatch = regex.test(item.get('category.name'));
      return categoryMatch || regex.test(item.get('description'));
    });

  }),

  actions: {
    sort(key) {
      "use strict";
      //flip sorting when selecting twice the same sorting
      let sortCriteria = this.get('sortingKey')[0];

      let currentSortingKey = sortCriteria.split(':')[0];
      let currentSortingOrder = sortCriteria.split(':')[1];

      if (currentSortingKey === key) {
        if (currentSortingOrder === 'asc') {
          this.set('sortingKey', [key + ':desc']);
        } else {
          this.set('sortingKey', [key + ':asc']);
        }
      } else {
        this.set('sortingKey', [key + ':asc']);
      }


    },

    goToEditForm() {
      "use strict";
      this.sendAction('goToEditForm');
    },

    updateTransaction(transaction) {
      "use strict";
      transaction.toggleProperty('isConfirmed');
      transaction.save().catch(function () {
        transaction.rollbackAttributes();
      });
    }
  }


});
