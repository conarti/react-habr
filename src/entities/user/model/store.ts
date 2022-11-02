import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorage } from 'shared/lib/LocalStorage';
import { User, USER_LOCAL_STORAGE_KEY, UserSchema } from '../config';

const initialState: UserSchema = {};

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
});

export const { actions: userActions, reducer: userReducer } = userSlice;
