import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Index', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('index', function() {
  visit('/');
  andThen(function() {
    equal(currentPath(), 'tables');
    equal(find('h2#title').text(), 'Ordr');
  });
});