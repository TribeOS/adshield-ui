define('adshield-front/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/stats-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/stats-test.js should pass ESLint\n\n');
  });
});