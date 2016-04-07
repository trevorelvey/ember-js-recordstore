import Ember from 'ember';

export function recordPopularity(params) {
  var record = params[0];

  if(record.get("popularity") >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(recordPopularity);
