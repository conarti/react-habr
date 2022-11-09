import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { userModel } from 'entities/user';
import { User } from 'entities/user/config';

interface LoginByUserName {
	username: string,
	password: string,
}

export const loginByUserName = createAsyncThunk<User, LoginByUserName, ThunkConfig<string>>(
	'login/loginByUserName',
	async (authData, thunkAPI) => {
		try {
			const { data } = await thunkAPI.extra.api.post<User>('/login', authData);

			// FIXME: is it needed?
			if (!data) {
				throw new Error('User not found');
			}

			thunkAPI.dispatch(userModel.userActions.setAuthData(data));

			return data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.response.data.message);
		}
	},
);
