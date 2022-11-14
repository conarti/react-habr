import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { UserProfile } from '../config';

export const fetchProfile = createAsyncThunk<UserProfile, void, ThunkConfig<string>>(
	'user/fetchProfile',
	async (_, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI;

		try {
			const { data } = await extra.api.get<UserProfile>('/profile');
			return data;
		} catch (e) {
			return rejectWithValue(e.response.data.message);
		}
	},
);
