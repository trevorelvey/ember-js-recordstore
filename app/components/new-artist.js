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
      if (this.get('name') !== undefined) {
        this.sendAction('save', params);
      } else {
        alert("You did not put in a valid artist name.");
      }
      this.set('name', '');
    }
  }
});
