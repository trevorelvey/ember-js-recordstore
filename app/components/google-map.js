import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap() {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(45.520742, -122.677360),
        zoom: 15
      };
      
      this.get('map').findMap(container, options);
    }
  },

  // http://matt-jensen.github.io/ember-cli-g-maps/#/basic-usage/index
  // https://www.npmjs.com/package/ember-cli-g-maps

});
