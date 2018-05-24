import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/browserIntegrityCheck', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index/browser-integrity-check');
    assert.ok(route);
  });
});
