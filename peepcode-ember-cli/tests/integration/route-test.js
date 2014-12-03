import startApp from '../helpers/start-app';
import Ember from 'ember';
var App;

module('Integration - Index Redirect', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('redirect on initial page', function() {
  // visit('/');
  // andThen(function() {
  //   equal(find('.somethign').lenght, 0);
  // });
});