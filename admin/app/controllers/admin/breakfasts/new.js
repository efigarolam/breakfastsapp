import Ember from 'ember';

export default Ember.Controller.extend({
  showFlash: false,
  isPersisted: false,

  actions: {
    hideFlash: function() {
      this.set('showFlash', false);
    },

    submitForm: function() {
      this.get('target').send('createNewBreakfast', this.get('model'));
    },
  }
});
