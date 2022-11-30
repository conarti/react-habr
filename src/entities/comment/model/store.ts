import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentSchema } from '../config';

export const initialState: AddCommentSchema = {
	isLoading: false,
};

export const store = createSlice({
	name: 'addCommentForm',
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload;
		},
	},
});

export const { actions: addCommentActions, reducer: addCommentReducer } = store;
