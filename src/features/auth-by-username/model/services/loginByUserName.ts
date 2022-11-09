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
		const { rejectWithValue, dispatch, extra } = thunkAPI;

		try {
			const { data } = await extra.api.post<User>('/login', authData);

			// FIXME: is it needed?
			if (!data) {
				throw new Error('User not found');
			}

			dispatch(userModel.userActions.setAuthData(data));

			return data;
		} catch (e) {
			return rejectWithValue(e.response.data.message);
		}
	},
);
