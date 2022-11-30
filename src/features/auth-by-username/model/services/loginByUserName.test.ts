import { TestAsyncThunk } from 'shared/lib/tests/TestAyncThunk';
import { userActions } from '../../../../entities/user/model';
import { loginByUserName } from './loginByUserName';

describe('loginByUsername', () => {
	test('success login', async () => {
		const userValue = { username: '123', id: '1', avatar: null };

		const thunk = new TestAsyncThunk(loginByUserName);
		thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
		const result = await thunk.callThunk({ username: '123', password: '123' });

		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(userValue);
	});

	test('error login', async () => {
		const thunk = new TestAsyncThunk(loginByUserName);
		thunk.api.post.mockReturnValue(Promise.reject({ status: 403 }));
		const result = await thunk.callThunk({ username: '123', password: '123' });

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('loginByUsername error');
	});
});
