import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';
import { userModel } from 'entities/user';
import { UserProfile } from '../config';

export const fetchProfile = createAsyncThunk<UserProfile, void, ThunkConfig<string>>(
	'user/fetchProfile',
	async (_, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI;

		try {
			const { data } = await extra.api.get<UserProfile>('/profile');
			return data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return rejectWithValue(error.response?.data.message);
			}
			console.error(error);
			return rejectWithValue('fetchProfile error');
		}
	},
);

export const updateProfile = createAsyncThunk<UserProfile, void, ThunkConfig<string>>(
	'user/updateProfile',
	async (_, thunkAPI) => {
		const { rejectWithValue, extra, getState } = thunkAPI;

		const profile = userModel.getProfile(getState());

		try {
			const { data } = await extra.api.put<UserProfile>('/profile', profile);
			return data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return rejectWithValue(error.response?.data.message);
			}
			console.error(error);
			return rejectWithValue('updateProfile error');
		}
	},
);
