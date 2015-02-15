import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    random: function() {
      Ember.$.getJSON('http://www.reddit.com/reddits.json?limit=100').then(function(result) {
        var randomElement = Math.floor(Math.random() * 99);
        var subreddit = result.data.children[randomElement].data.url;
        var url = subreddit.substring(3, (subreddit.length - 1));
        this.transitionToRoute('posts', url);
      }.bind(this));
    }
  }
});
