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

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('tables');
  }
});

App.TablesRoute = Ember.Route.extend({
  model: function() {
    return App.Table.find();
  }
});
// don't need TableRoute because it's auto generated by Ember

// auto generated by route
// App.TablesController = Ember.ArrayController.extend(); 
// App.TableController = Ember.ObjectController.extend();

// auto generated by template
// App.TabController = Ember.ObjectController.extend();

App.FoodController = Ember.ArrayController.extend({
  addFood: function(food) {
    var table = this.controllerFor('table'),
        tabItems = table.get('tab.tabItems');
    tabItems.createRecord({
      food: food
    })

  }
});

Ember.Handlebars.registerBoundHelper('money', function(){
  return '13.11';
});