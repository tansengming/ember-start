import startApp from '../helpers/start-app';
import Ember from 'ember';
var App;

module('Integration - Index Redirect', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    App.reset();
  }
});

test('redirect on initial page', function() {
  visit('/');
  andThen(function() {
    equal(currentPath(), 'tables');
  });
});