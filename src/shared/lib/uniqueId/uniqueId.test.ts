import { uniqueId } from 'shared/lib/uniqueId/uniqueId';

describe('uniqueId', () => {
	test('should works without prefix', () => {
		expect(uniqueId()).toEqual('1');
		expect(uniqueId()).toEqual('2');
		expect(uniqueId()).toEqual('3');
	});

	test('should works with prefix', () => {
		const prefix = 'prefix';
		expect(uniqueId(prefix)).toEqual(`${prefix}4`);
		expect(uniqueId(prefix)).toEqual(`${prefix}5`);
		expect(uniqueId(prefix)).toEqual(`${prefix}6`);
	});
});
