import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | index/known-violator-user-agent', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:index/known-violator-user-agent');
    assert.ok(controller);
  });
});
