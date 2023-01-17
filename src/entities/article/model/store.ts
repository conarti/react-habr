import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../config';
import { Article } from '../config/types/article';
import { fetchArticleByID } from './services';

const initialState: ArticleDetailsSchema = {
	isLoading: false,
};

export const articleDetailsSlice = createSlice({
	name: 'articleDetails',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleByID.pending, (state) => {
				state.isLoading = true;
				state.error = '';
			})
			.addCase(fetchArticleByID.fulfilled, (state, action: PayloadAction<Article>) => {
				state.isLoading = false;
				state.error = '';
				state.data = action.payload;
			})
			.addCase(fetchArticleByID.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: articleDetailsActions, reducer: articleDetailsReducer } = articleDetailsSlice;
