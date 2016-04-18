import DS from 'ember-data';
import ENV from 'budget-frontend/config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.APP.host,
  namespace: 'auth'
});
