import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('accounts', {path: '/accounts'});
  this.route('payment-means');
});

export default Router;
