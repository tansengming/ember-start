App.Router.map(function() {
  this.resource('tables', function() {
    this.resource('table', {path: ':table_id'})
  });
});

App.ApplicationRoute = Ember.Route.extend({
  // setupController is good for stuff that works across controllers
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
// don't need TableRoute because it's auto generated by Ember


App.TablesController = Ember.ArrayController.extend();
App.FoodController = Ember.ArrayController.extend({
  addFood: function(food) {
    var table = this.controllerFor('table'),
        tabItems = table.get('tab.tabItems');
    tabItems.createRecord({
      food: food
    })

  }
});
App.TabController = Ember.ObjectController.extend();

Ember.Handlebars.registerBoundHelper('money', function(){
  return '13.11';
});