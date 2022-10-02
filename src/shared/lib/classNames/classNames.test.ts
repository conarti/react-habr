import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
	test('with only first param', () => {
		expect(classNames('test')).toBe('test');
	});

	test('with additional class', () => {
		expect(classNames('test', {}, ['add'])).toBe('test add');
	});

	test('with mods', () => {
		expect(classNames('test', { mod: true }, ['add'])).toBe('test add mod');
		expect(classNames('test', { mod: true, unused: false }, [])).toBe('test mod');
	});
});
