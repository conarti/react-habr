import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../config';

const initialState: UserSchema = {};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
