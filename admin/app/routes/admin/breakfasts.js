import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('breakfast');
  },

  actions: {
    seeBreakfast: function(breakfast) {
      this.transitionTo('admin.breakfasts.show', breakfast.get('id'));
    }
  }
});
