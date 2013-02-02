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

App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

App.Table = DS.Model.extend();

App.Table.FIXTURES = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6}
];

// App.Router = Ember.Router.extend({
//   root: Ember.Route.extend({
//     index: Ember.Route.extend({
//       route: '/'

//       // You'll likely want to connect a view here.
//       // connectOutlets: function(router) {
//       //   router.get('applicationController').connectOutlet(App.MainView);
//       // }

//       // Layout your routes here...
//     })
//   })
// });

