`import Ember from 'ember'`

TablesRoute = Ember.Route.extend {
  model: ->
    @store.find('table')
}

`export default TablesRoute`