import Ember from 'ember';

export function initialize(container, application) {
  application.deferReadiness();
  var store = container.lookup('store:main');
  var currentUserId = Ember.$('meta[name="current-user-id"').attr('content');

  store.find('user', currentUserId).then(function(user) {
    var Session = Ember.Object.extend({
      currentUser: user
    });

    application.register('session:main', Session);
    application.inject('controller', 'session', 'session:main');
    application.advanceReadiness();
  });
}

export default {
  name: 'current-user',
  after: 'ember-data',
  initialize: initialize
};
