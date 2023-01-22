import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userModel, userConfig } from 'entities/user';
import { ThunkConfig } from 'shared/config/types';

interface LoginByUserName {
	username: string,
	password: string,
}

export const loginByUserName = createAsyncThunk<userConfig.User, LoginByUserName, ThunkConfig<string>>(
	'login/loginByUserName',
	async (authData, thunkAPI) => {
		const { rejectWithValue, dispatch, extra } = thunkAPI;

		try {
			const { data } = await extra.api.post<userConfig.User>('/login', authData);

			dispatch(userModel.userActions.setAuthData(data));

			return data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return rejectWithValue(error.response?.data.message);
			}

			return rejectWithValue('loginByUsername error');
		}
	},
);
