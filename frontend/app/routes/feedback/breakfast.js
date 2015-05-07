import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('breakfast', params.id);
  },

  setupController: function(controller, model) {
    var rates = model.get('rates');
    var currentUser = this.currentUser();

    var rate;
    var currentUserRate = rates.filter(function(rate) {
      if(rate.get('user.id') === currentUser.get('id')) { return true; }
    });

    rate = currentUserRate[0] || this.store.createRecord('rate', {
      user: currentUser,
      breakfast: model
    });

    controller.set('model', model);
    controller.set('rate', rate);
    this.createNewComment();
  },

  actions: {
    createComment: function(comment) {
      comment.save().then(function() {
        this.createNewComment();
      }.bind(this));
    },

    setRate: function(rate) {
      rate.save();
    }
  },

  currentUser: function() {
    return this.controllerFor('feedback/breakfast').get('session.currentUser');
  },

  createNewComment: function() {
    var comment = this.store.createRecord('comment', {
      createdAt: new Date(),
      author: this.currentUser()
    });

    this.controllerFor('feedback/breakfast').set('newComment', comment);
  }
});
