import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  model(params) {
    return Ember.RSVP.hash({
      record: this.store.findRecord('record', params.record_id),
      shoppingCart: this.get('shoppingCart')
    });
  },
  actions: {
    addToCart(record) {
      this.get('shoppingCart').add(record);
    },
  }
});
