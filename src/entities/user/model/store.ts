import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorage } from 'shared/lib/LocalStorage/LocalStorage';
import { fetchProfile } from './services';
import {
	User, USER_LOCAL_STORAGE_KEY, UserProfile, UserSchema,
} from '../config';

const initialState: UserSchema = {
	isLoading: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
			LocalStorage.set(USER_LOCAL_STORAGE_KEY, action.payload);
		},
		initAuthData: (state) => {
			state.authData = LocalStorage.get(USER_LOCAL_STORAGE_KEY);
		},
		logout: (state) => {
			state.authData = undefined;
			LocalStorage.remove(USER_LOCAL_STORAGE_KEY);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfile.pending, (state) => {
				state.isLoading = true;
				state.error = '';
			})
			.addCase(fetchProfile.fulfilled, (state, action: PayloadAction<UserProfile>) => {
				state.isLoading = false;
				state.error = '';
				state.profile = action.payload;
			})
			.addCase(fetchProfile.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
