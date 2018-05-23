import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/ip-access-list', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index/ip-access-list');
    assert.ok(route);
  });
});
