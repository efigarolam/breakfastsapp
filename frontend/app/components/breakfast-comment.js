import Ember from 'ember';

export default Ember.Component.extend({
  isShowingActions: false,
  isEditing: false,
  isDeletionConfirmed: false,

  isShowingComment: function() {
    return this.get('comment.body') || this.get('isEditing');
  }.property('comment.body', 'isEditing'),

  deleteButtonMessage: function() {
    if(this.get('isDeletionConfirmed') === false) {
      return 'Delete';
    } else {
      return 'Confirm Delete';
    }
  }.property('isDeletionConfirmed'),

  actions: {
    showActions: function() {
      if(this.get('comment.author') === this.get('currentUser')) {
        if(!this.get('isEditing')) {
          this.toggleProperty('isShowingActions');
          this.set('isDeletionConfirmed', false);
        }
      }
    },

    showEditForm: function() {
      this.set('isShowingActions', false);
      this.set('isEditing', true);
    },

    cancelUpdate: function() {
      this.get('comment').rollback();
      this.set('isEditing', false);
    },

    updateComment: function(comment) {
      comment.save().then(function() {
        this.set('isEditing', false);
      }.bind(this)).catch(function() {
        // Something went wrong
      });
    },

    startDeletion: function() {
      if(this.get('isDeletionConfirmed') === false) {
        this.set('isDeletionConfirmed', true);
      } else {
        this.get('comment').destroyRecord().catch(function() {
          // Something went wrong
        });
      }
    }
  }
});
