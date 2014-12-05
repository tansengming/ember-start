`import { moduleForModel, test } from 'ember-qunit';`

moduleForModel 'table', 'Table', {
  # Specify the other units that are required for this test.
  # needs: []
}

test 'it exists', ->
  model = this.subject()
  ok(!!model)

test 'it has data', ->
  store = this.store();
  all = store.find('table');

  all.then ->
    equal all.get('length'), 6