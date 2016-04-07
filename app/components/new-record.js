import Ember from 'ember';

export default Ember.Component.extend({
  addNewRecord: false,
  selectedArtist: null,
  actions: {
    recordFormShow() {
      this.set('addNewRecord', true);
    },
    selectArtist() {
      var params = {
        artist: this.get('artist')
      };
      console.log(params.artist.get('name'));
      this.set('selectedArtist', params.artist);
      this.set('addNewRecord', true);
    },
    save() {
      var params = {
        title: this.get('title'),
        genre: this.get('genre'),
        price: this.get('price'),
        artist: this.selectedArtist,
        image: this.get('image'),
        description: this.get('description'),
      };
      this.set('addNewRecord', false);
      this.sendAction('save', params);
      this.set('title', '');
      this.set('genre', '');
      this.set('price', '');
      this.set('image', '');
      this.set('description', '');
    }
  }
});
