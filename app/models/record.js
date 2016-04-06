import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  artist: DS.belongsTo('artist', {async:true}),
  genre: DS.attr(),
  popularity: DS.attr(),
  price: DS.attr()
});
