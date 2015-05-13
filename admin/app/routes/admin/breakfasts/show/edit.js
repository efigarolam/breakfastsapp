import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateBreakfast: function(breakfast) {
      breakfast.save().then(function() {
        this.controller.set('showFlash', true);
        this.controller.set('isPersisted', true);
      }.bind(this)).catch(function() {
        this.controller.set('showFlash', true);
        this.controller.set('isPersisted', false);
      }.bind(this));
    },

    cancelUpdate: function(breakfast) {
      this.transitionTo('admin.breakfasts.show', breakfast);
    }
  }
});

