import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('accounts', {path: '/accounts'}, function () {
    this.route('new', {path: '/new'});
    this.route('show', {path: '/:id'});
  });
  this.route('payment-means', function () {
    this.route('new', {path: '/new'});
    this.route('show', {path: '/:id'});
  });
});

export default Router;
