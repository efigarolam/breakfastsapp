import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('breakfast', params.id);
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    var currentUser = controller.get('session.currentUser');
    var comment = this.store.createRecord('comment', {
      author: currentUser
    });

    controller.set('newComment', comment);
  },

  actions: {
    createComment: function(comment) {
      comment.save();
    }
  }
});
