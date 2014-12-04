import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Tables', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /tables', function() {
  visit('/tables');

  andThen(function() {
    equal(currentPath(), 'tables');
    equal(find('#subtitle').text(), 'Tables');
  });
});
