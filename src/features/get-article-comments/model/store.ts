import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { commentConfig } from 'entities/comment';
import { ArticleCommentsSchema } from '../config';
import { fetchCommentsByArticleId } from './services';

export const commentsAdapter = createEntityAdapter<commentConfig.Comment>();

export const store = createSlice({
	name: 'article/comments',
	initialState: commentsAdapter.getInitialState<ArticleCommentsSchema>({
		isLoading: false,
		ids: [],
		entities: {},
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCommentsByArticleId.pending, (state) => {
				state.isLoading = true;
				state.error = '';
			})
			.addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<commentConfig.Comment[]>) => {
				state.isLoading = false;
				state.error = '';
				commentsAdapter.setAll(state, action.payload);
			})
			.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: articleCommentsReducer } = store;
