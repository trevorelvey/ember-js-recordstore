import DS from 'ember-data';
import ember from 'ember';

export default DS.Model.extend({
  title: DS.attr(),
  artist: DS.belongsTo('artist', {async:true}),
  genre: DS.attr(),
  popularity: DS.attr('number', {defaultValue: 0}),
  price: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),

  shoppingCart: ember.inject.service(),
  inCart: ember.computed('shoppingCart.records.[]', function() {
    return this.get('shoppingCart').includes(this);
  })
});
