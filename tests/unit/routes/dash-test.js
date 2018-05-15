import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dash', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dash');
    assert.ok(route);
  });
});
