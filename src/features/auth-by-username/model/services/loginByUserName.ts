import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userModel } from 'entities/user';
import { User } from 'entities/user/config';

interface LoginByUserName {
	username: string,
	password: string,
}

export const loginByUserName = createAsyncThunk<User, LoginByUserName, { rejectValue: string }>(
	'login/loginByUserName',
	async (authData, thunkAPI) => {
		try {
			const { data } = await axios.post<User>('http://localhost:3000/login', authData);

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
