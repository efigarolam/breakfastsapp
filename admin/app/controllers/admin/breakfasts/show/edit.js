import Ember from 'ember';

export default Ember.Controller.extend({
  showFlash: false,
  isPersisted: false,
  successMesage: 'Breakfast updated correctly.',

  actions: {
    hideFlash: function() {
      this.set('showFlash', false);
    },

    submitForm: function() {
      this.get('target').send('updateBreakfast', this.get('model'));
    },
  }
});

