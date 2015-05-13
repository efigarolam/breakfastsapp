import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('breakfast');
  },

  actions: {
    createNewBreakfast: function(breakfast) {
      breakfast.save().then(function() {
        this.controller.set('showFlash', true);
        this.controller.set('isPersisted', true);

        var newBreakfast = this.store.createRecord('breakfast');
        this.controller.set('model', newBreakfast);
      }.bind(this)).catch(function() {
        this.controller.set('showFlash', true);
        this.controller.set('isPersisted', false);
      }.bind(this));
    },

    cancelCreation: function() {
      this.transitionTo('admin.breakfasts');
    }
  }
});
