import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('record');
  },
  shoppingCart: Ember.inject.service(),
  actions: {
    upPopularity() {
      for (var record of this.get('shoppingCart').get('records')){
        var popularity = record.get('popularity');
        record.set('popularity', popularity += 1);
        record.save();
      }
    }
  }
});
