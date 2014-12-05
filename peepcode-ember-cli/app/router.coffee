`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend {
  location: config.locationType
}

Router.map ->
  this.resource 'tables', ->
    this.resource 'table', {path: ':table_id'}

`export default Router`