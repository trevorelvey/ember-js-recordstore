import Ember from 'ember';

export default Ember.Component.extend({
  editForm: false,
  actions: {
    editForm() {
      this.set('editForm', true);
    },
    update(record) {
      var params = {
        title: this.get('record.title'),
        genre: this.get('record.genre'),
        price: this.get('record.price'),
        image: this.get('record.image'),
        decription: this.get('record.description'),
      };
      this.sendAction('update', record, params);
      this.set('editForm', false);
    }
  }
});
