import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(link, title) {
  var html = '<a href=https://www.reddit.com' + link + '>' + title + '</a>';
  return new Ember.Handlebars.SafeString(html);
});
