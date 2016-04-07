import Ember from 'ember';

export default Ember.Service.extend({
  records: [],

  cartTotal: Ember.computed('records.length', function() {
    var cartTotal = 0;
    for (let total of this.get('records')){
      cartTotal += parseInt(total.get('price'));
    }
    return cartTotal;
  }),

  add(record) {
    this.get('records').pushObject(record);
  },
  remove(record) {
    this.get('records').removeObject(record);
  },
  empty() {
    this.get('records').setObjects([]);
  },
  includes(record){
    return this.get('records').includes(record);
  }
});
