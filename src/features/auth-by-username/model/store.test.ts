import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/auth-by-username';
import { loginActions, loginReducer } from './store';

const PAYLOAD = '123123';

describe('auth-by-username/store', () => {
	test('should set username', () => {
		const state: DeepPartial<LoginSchema> = { username: '123' };
		expect(loginReducer(
			state as LoginSchema,
			loginActions.setUsername(PAYLOAD),
		)).toEqual({ username: PAYLOAD });
	});

	test('should set password', () => {
		const state: DeepPartial<LoginSchema> = { password: '123' };
		expect(loginReducer(
			state as LoginSchema,
			loginActions.setPassword(PAYLOAD),
		)).toEqual({ password: PAYLOAD });
	});
});
