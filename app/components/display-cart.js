import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  cartTotal: Ember.computed(function() {
    var cartTotal = 0;
    for (let record of 'shoppingCart') {
      console.log(record);
    }
    return cartTotal;
  }),

  actions: {
    removeFromCart(record) {
      console.log(this.cartTotal);
      this.get('shoppingCart').remove(record);
    },
    emptyCart() {
      this.get('shoppingCart').empty();
    }
  }
});
