function format(date, format) {
  if(!date) {
    return '';
  }

  return window.moment(date).utc().format(format);
}

export default {
  format
};
