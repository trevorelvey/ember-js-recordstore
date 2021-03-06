import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    removeFromCart(record) {
      this.get('shoppingCart').remove(record);
    },
    emptyCart() {
      this.get('shoppingCart').empty();
    },
    checkout() {
      this.sendAction('upPopularity');
      this.get('shoppingCart').checkout();
    }
  }
});
