`import Ember from 'ember'`
`import startApp from '../helpers/start-app'`

App = ''

module 'Acceptance: Tables', {
  setup: ->
    App = startApp()
  teardown: ->
    Ember.run App, 'destroy'
}

test 'visiting /tables', ->
    visit '/tables'
    andThen ->
      equal currentPath(), 'tables'
      equal find('#subtitle').text(), 'Tables'