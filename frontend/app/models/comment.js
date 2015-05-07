import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  author: DS.belongsTo('user'),
  breakfast: DS.belongsTo('breakfast')
});
