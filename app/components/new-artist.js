import Ember from 'ember';

export default Ember.Component.extend({
  addNewArtist: false,
  actions: {
    artistFormShow() {
      this.set('addNewArtist', true);
    },
    save() {
      var params = {
        name: this.get('name')
      };

      this.set('addNewArtist', false);
      this.sendAction('save', params);
      this.set('name', '');
    }
  }
});
