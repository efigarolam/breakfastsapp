import Ember from 'ember';

export default Ember.Controller.extend({
  possibleRateValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

  observeNewComment: function() {
    if(this.get('newComment.body')) {
      this.get('model.comments').pushObject(this.get('newComment'));
    } else {
      this.get('model.comments').removeObject(this.get('newComment'));
    }
  }.observes('newComment.body'),

  observeRate: function() {
    if(this.get('rate.isDirty') && this.get('rate.value')) {
      this.get('target').send('setRate', this.get('rate'));
    }
  }.observes('rate.value')
});
