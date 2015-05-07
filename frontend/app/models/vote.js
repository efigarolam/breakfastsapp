import DS from 'ember-data';

export default DS.Model.extend({
  positive: DS.attr('boolean'),
  author: DS.belongsTo('user')
});
