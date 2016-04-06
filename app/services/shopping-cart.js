import Ember from 'ember';

export default Ember.Service.extend({
  records: [],

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
