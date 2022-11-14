import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';
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

			dispatch(userModel.userActions.setAuthData(data));

			return data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return rejectWithValue(error.response?.data.message);
			}
			console.error(error);
			return rejectWithValue('loginByUsername error');
		}
	},
);
