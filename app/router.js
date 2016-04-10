import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('accounts', {path: '/accounts'}, function () {
    this.route('new', {path: '/new'});
    this.route('show', {path: '/:id'});
    this.route('edit', {path: '/:id/edit'});
  });
  this.route('payment-means', function () {
    this.route('new', {path: '/new'});
    this.route('show', {path: '/:id'});
    this.route('edit', {path: '/:id/edit'});
  });
  this.route('transactions', {path: '/transactions'}, function () {
    "use strict";
    this.route('recurring');
  });
  this.route('reports');
  this.route('login');
  this.route('signup');
  this.route('errorPage', {path: '/error'});
});

export default Router;
