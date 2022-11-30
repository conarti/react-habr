import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentSchema } from '../../config/types';

const initialState: CommentSchema = {

};

export const commentSlice = createSlice({
	name: 'comment',
	initialState,
	reducers: {
		template: (state, action: PayloadAction<string>) => {

		},
	},
	// extraReducers: (builder) => {
	//     builder
	//         .addCase(, (state) => {
	//             state.error = undefined;
	//             state.isLoading = true;
	//         })
	//         .addCase(, (state) => {
	//             state.isLoading = false;
	//         })
	//         .addCase(, (state, action) => {
	//             state.isLoading = false;
	//             state.error = action.payload;
	//         });
	// },
});

export const { actions: commentActions, reducer: commentReducer } = commentSlice;
