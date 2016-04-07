import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['price:asc'],
  sortedRecords: Ember.computed.sort('records', 'sortBy'),
});
