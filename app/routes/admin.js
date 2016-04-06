import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      records: this.store.findAll('record'),
      artists: this.store.findAll('artist')
    });
  },
  actions: {
    deleteRecord(record) {
      record.destroyRecord();
      this.transitionTo('admin');
    },
    saveRecord(params) {
      var newRecord = this.store.createRecord('record', params);
      var artist = params.artist;
      console.log(params);
      artist.get('records').addObject(newRecord);
      newRecord.save().then(function() {
          return artist.save();
      });
        this.transitionTo('admin');
    },
    saveArtist(params) {
      console.log(params);
      var newArtist = this.store.createRecord('artist', params);
      newArtist.save();
      this.transitionTo('admin');
    }
  }
});
