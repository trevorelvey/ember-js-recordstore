import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(record) {
      this.get('shoppingCart').add(record);
    },
  }
});
