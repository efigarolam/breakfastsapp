import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('breakfast', params.id);
  },

  actions: {
    deleteBreakfast: function(breakfast) {
      breakfast.destroyRecord().then(function() {
        this.transitionTo('admin.breakfasts');
      }.bind(this)).catch(function() {
        // Something went wrong
      });
    }
  }
});
