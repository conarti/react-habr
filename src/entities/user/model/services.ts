import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from 'shared/config/types';
import { UserProfile } from '../config';
import { getProfile } from './selectors';

export const fetchProfile = createAsyncThunk<UserProfile, string, ThunkConfig<string>>(
	'user/fetchProfile',
	async (id, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI;

		try {
			const { data } = await extra.api.get<UserProfile>(`/profile/${id}`);
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

export const updateProfile = createAsyncThunk<UserProfile, string, ThunkConfig<string>>(
	'user/updateProfile',
	async (id, thunkAPI) => {
		const { rejectWithValue, extra, getState } = thunkAPI;

		const profile = getProfile(getState());

		try {
			const { data } = await extra.api.put<UserProfile>(`/profile/${id}`, profile);
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
