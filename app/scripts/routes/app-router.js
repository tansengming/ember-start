App.Router.map(function() {
  this.resource('tables', function() {
    this.resource('table', {path: ':table_id'})
  });
});

App.ApplicationRoute = Ember.Route.extend({
  setupController: function() {
    this.controllerFor('food').set('model', App.Food.find());
  }
});

App.TablesRoute = Ember.Route.extend({
  // I assume that tablesController calls this function at some point
  model: function() {
    return App.Table.find();
  }
});

App.TablesController = Ember.ArrayController.extend();
App.FoodController = Ember.ArrayController.extend();