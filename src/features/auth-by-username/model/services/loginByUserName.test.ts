import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAyncThunk';
import { userActions } from '../../../../entities/user/model';
import { loginByUserName } from './loginByUserName';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername', () => {
	test('success login', async () => {
		const userValue = { username: '123', id: '1' };
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const thunk = new TestAsyncThunk(loginByUserName);
		const result = await thunk.callThunk({ username: '123', password: '123' });

		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(userValue);
	});

	test('error login', async () => {
		const ERROR_MESSAGE = 'User not found';
		mockedAxios.post.mockReturnValue(Promise.reject({ status: 403, response: { data: { message: ERROR_MESSAGE } } }));
		const thunk = new TestAsyncThunk(loginByUserName);
		const result = await thunk.callThunk({ username: '123', password: '123' });

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe(ERROR_MESSAGE);
	});
});
