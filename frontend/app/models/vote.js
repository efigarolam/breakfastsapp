import DS from 'ember-data';

export default DS.Model.extend({
  positive: DS.attr('boolean'),
  user: DS.belongsTo('user')
});
