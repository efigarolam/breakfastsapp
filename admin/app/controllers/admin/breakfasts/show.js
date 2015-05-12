import Ember from 'ember';

export default Ember.Controller.extend({
  showDeleteConfirmation: false,

  actions: {
    askForDeletionConfirm: function() {
      this.set('showDeleteConfirmation', true);
    },

    cancelDeletion: function() {
      this.set('showDeleteConfirmation', false);
    }
  }
});
