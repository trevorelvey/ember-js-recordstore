import Ember from 'ember';

export default Ember.Component.extend({
  addNewRecord: false,
  selectedArtist: "",
  actions: {
    recordFormShow() {
      this.set('addNewRecord', true);
    },
    selectArtist() {
      var params = {
        artist: this.get('artist')
      };
      this.set('selectedArtist', params.artist);
      this.set('addNewRecord', true);
    },
    save() {
      var params = {
        title: this.get('title'),
        artist: this.get('artist'),
        genre: this.get('genre'),
        price: this.get('price')
      };
      this.set('addNewRecord', false);
      this.sendAction('save', params);
    }
  }
});
