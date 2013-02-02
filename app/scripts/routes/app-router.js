App.Router.map(function() {
  this.resource('tables', function() {
    this.resource('table', {path: ':table_id'})
  });
});

App.TablesRoute = Ember.Route.extend({
  model: function() {
    return App.Table.find();
  }
});

App.TablesController = Ember.ArrayController.extend();