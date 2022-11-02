import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../config';

const initialState: UserSchema = {};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
		},
	},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
