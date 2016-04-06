import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('title'),
  artist: DS.belongsTo('artist', {async:true}),
  genre: DS.attr('genre'),
  popularity: DS.attr('popularity')
});
