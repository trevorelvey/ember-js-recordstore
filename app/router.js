import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('shoppingCart');
  this.route('cart');
  this.route('record', {path: 'record/:record_id'});
  this.route('about');
});

export default Router;
