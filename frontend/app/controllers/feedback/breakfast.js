import Ember from 'ember';

export default Ember.Controller.extend({
  observeNewComment: function() {
    if(this.get('newComment.body')) {
      this.get('content.comments').pushObject(this.get('newComment'));
    } else {
      this.get('content.comments').removeObject(this.get('newComment'));
    }
  }.observes('newComment.body')
});
