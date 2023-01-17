import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/config/types';
import { getLoginState } from './selectors';
import { initialState } from './store';

describe('auth-by-username model selectors', () => {
	test('should return default state if reducer isn\'t loaded', () => {
		expect(getLoginState(undefined)).toEqual(initialState);
	});
	test('should return state', () => {
		const loginFormState = {
			username: 'username',
			password: 'password',
			isLoading: true,
		};
		const state: DeepPartial<StateSchema> = {
			loginForm: loginFormState,
		};
		expect(getLoginState(state as StateSchema)).toEqual(loginFormState);
	});
});
