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
      equal currentPath(), 'tables.index'
      equal find('#subtitle').text(), 'Tables'
      equal find('.table').length, 6

test 'visiting a table', ->
    visit '/tables'
    click '.table-link:first'
    andThen ->
      equal currentPath(), 'tables.table'
      equal find('.table-name').text(), 'Table 1'