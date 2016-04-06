import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteRecord(record) {
      this.sendAction('deleteRecord', record);
      console.log("test");
    }
  }
});
