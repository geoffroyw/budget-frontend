import Ember from 'ember';

export default Ember.Controller.extend({
  showTransactionForm: false,
  currencyService: Ember.inject.service('currency'),
  selectedBankAccount: undefined,

  transactionSorting: ['date:desc', 'id:desc'],
  bankAccountSorting: ['name'],

  newAccount: {name: '', currency: ''},

  transactions: Ember.computed.sort('model.transactions', 'transactionSorting'),
  bankAccounts: Ember.computed.sort('model.bankAccounts', 'bankAccountSorting'),
  paymentMeans: Ember.computed.alias('model.paymentMeans'),
  categories: Ember.computed.alias('model.categories'),

  hasBankAccounts: Ember.computed.notEmpty('bankAccounts'),

  actions: {

    showTransaction(bankAccount) {
      "use strict";
      this.set('selectedBankAccount', bankAccount);
    },

    openTransactionFormModal() {
      "use strict";
      let selectedTransaction = this.store.createRecord('transaction', {date: new Date()});
      this.set('selectedTransaction', selectedTransaction);
      this.set('showTransactionForm', true);

    },


    createNewCategory(name) {
      "use strict";
      this.get('store').createRecord('Category', {name: name}).save();
      this.set('model.categories', this.store.findAll('Category'));
    },

    removeModal() {
      "use strict";
      this.set('showTransactionForm', false);
    },

    editTransaction(transaction) {
      "use strict";
      this.set('selectedTransaction', transaction);
      this.set('showTransactionForm', true);
    },

    createAccount() {
      "use strict";
      let bankAccount = this.store.createRecord('BankAccount', {
        name: this.get('newAccount.name'),
        currency: this.get('newAccount.currency')
      });

      const flashMessages = Ember.get(this, 'flashMessages');

      bankAccount.save().then(function () {
        flashMessages.success('Bank Account successfully created!');
      }).catch(function () {
        flashMessages.danger('Error while saving the account. Please try again');
        bankAccount.rollbackAttributes();
      });

    },

    duplicateTransaction(transaction) {
      "use strict";
      let _this = this;
      transaction.copy({date: new Date()}).then(function(newTransaction) {
        _this.set('selectedTransaction', newTransaction);
        _this.set('showTransactionForm', true);
      });
    }
  }
});
