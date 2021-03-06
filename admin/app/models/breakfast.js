import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  servedAt: DS.attr('date'),
  picture: DS.attr('string'),
  comments: DS.hasMany('comment'),
  votes: DS.hasMany('vote'),
  rates: DS.hasMany('rates')
});
