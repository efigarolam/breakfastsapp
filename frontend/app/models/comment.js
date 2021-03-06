import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  createdAt: DS.attr('date'),
  author: DS.belongsTo('user'),
  breakfast: DS.belongsTo('breakfast')
});
