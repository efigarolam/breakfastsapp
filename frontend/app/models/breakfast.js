import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  servedAt: DS.attr('date'),
  comments: DS.hasMany('comment'),
  votes: DS.hasMany('vote')
});
