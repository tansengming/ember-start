import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('table', 'Table', {
  // Specify the other units that are required for this test.
  // needs: []
});

test('it exists', function() {
  var model = this.subject();
  ok(!!model);
});

test('it has data', function() {
  var store = this.store();
  var all = store.find('table');

  return all.then(function() { equal(all.get('length'), 6); });
});