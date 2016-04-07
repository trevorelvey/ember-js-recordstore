import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
      records: this.store.findAll('record'),
      shoppingCart: this.get('shoppingCart')
    });
  }
});
