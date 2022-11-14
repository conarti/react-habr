import { LocalStorage } from './LocalStorage';

const KEY = 'key';
const VALUE = 'value';
const DEFAULT_VALUE = 'default';

describe('LocalStorage', () => {
	beforeEach(() => {
		localStorage.removeItem(KEY);
	});

	test('should set key', () => {
		LocalStorage.set(KEY, VALUE);
		const savedValue = localStorage.getItem(KEY);
		expect(savedValue).not.toBeNull();
		expect(JSON.parse(savedValue as string)).toEqual(VALUE);
	});

	test('should return value', () => {
		LocalStorage.set(KEY, VALUE);
		const result = LocalStorage.get(KEY);
		expect(result).toEqual(VALUE);
	});

	test('should return default value', () => {
		const result = LocalStorage.get(KEY, DEFAULT_VALUE);
		expect(result).toEqual(DEFAULT_VALUE);
	});

	test('should return null if hasn\'t key', () => {
		const result = LocalStorage.get(KEY);
		expect(result).toBeNull();
	});

	test('should remove key', () => {
		localStorage.setItem(KEY, JSON.stringify(VALUE));
		LocalStorage.remove(KEY);
		const result = localStorage.getItem(KEY);
		expect(result).toBeNull();
	});
});
