import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | apiaccesslist', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:apiaccesslist');
    assert.ok(route);
  });
});
