'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
	});

	QUnit.test('Длинные строчки', function (assert) {
		assert.strictEqual(solve('x - x * 3 + 56 - x + 22 * x', 2), 94);
		assert.strictEqual(solve('144 - x * x + 12 - 6 * x + 3', 3), 132);
	});

	QUnit.test('Cкобки', function (assert) {
		assert.strictEqual(solve('11 - (3 - x) * ((x + 22) + x)', 4), 41);
		assert.strictEqual(solve('(11 - (26 + x) * x) * x', 7), -1540);
	});
});
