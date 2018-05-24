import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/suspUserAgent', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index/susp-user-agent');
    assert.ok(route);
  });
});
