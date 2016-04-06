import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteRecord(record) {
      if (confirm('Are you sure you want to delete this record?')) {
      this.sendAction('deleteRecord', record);
      }
    }
  }
});
