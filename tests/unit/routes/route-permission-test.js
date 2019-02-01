import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | route-permission', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:route-permission');
    assert.ok(route);
  });
});
