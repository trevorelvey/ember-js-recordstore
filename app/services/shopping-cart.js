import Ember from 'ember';

export default Ember.Service.extend({
  records: [],
  checkedOut: false,

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
  checkout() {
    for (let record of this.get('records')){
      var popularity = record.get('popularity');
      popularity += 1;
    }

    this.get('records').setObjects([]);
    var checkedOut = this.get('checkedOut');
    this.set('checkedOut', true);
  },
  includes(record){
    return this.get('records').includes(record);
  }
});
