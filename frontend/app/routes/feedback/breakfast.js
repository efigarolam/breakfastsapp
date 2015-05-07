import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('breakfast', params.id);
  },

  setupController: function(controller, model) {
    var rates = model.get('rates');
    var currentUser = controller.get('session.currentUser');
    var comment = this.store.createRecord('comment', {
      author: currentUser
    });

    var rate;
    var currentUserRate = rates.filter(function(rate) {
      if(rate.get('user.id') === currentUser.get('id')) { return true; }
    });

    rate = currentUserRate[0] || this.store.createRecord('rate', {
      user: currentUser,
      breakfast: model
    });

    controller.set('model', model);
    controller.set('newComment', comment);
    controller.set('rate', rate);
  },

  actions: {
    createComment: function(comment) {
      comment.save();
    },

    setRate: function(rate) {
      rate.save();
    }
  }
});
