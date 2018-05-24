import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/js-check-failed', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index/js-check-failed');
    assert.ok(route);
  });
});
