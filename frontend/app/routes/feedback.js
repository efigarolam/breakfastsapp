import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('breakfast');
  },

  actions: {
    goToFeedbackModal: function(breakfast) {
      return this.transitionTo('feedback.breakfast', breakfast.id);
    }
  }
});
