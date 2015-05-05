import Ember from 'ember';
import dateHelper from '../utils/date-helper';

export function formatDate(params) {
  return dateHelper.format(params[0], params[1]);
}

export default Ember.HTMLBars.makeBoundHelper(formatDate);
