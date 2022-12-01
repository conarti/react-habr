import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { articleConfig } from 'entities/article';
import { fetchArticles } from './services';
import { ArticlesSchema } from '../config';

export const articlesAdapter = createEntityAdapter<articleConfig.Article>();

const store = createSlice({
	name: 'articles',
	initialState: articlesAdapter.getInitialState<ArticlesSchema>({
		isLoading: true,
		ids: [],
		entities: {},
		isLoaded: false,
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticles.pending, (state) => {
				state.isLoading = true;
				state.error = '';
			})
			.addCase(fetchArticles.fulfilled, (state, action: PayloadAction<articleConfig.Article[]>) => {
				state.isLoading = false;
				state.error = '';
				state.isLoaded = true;
				articlesAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticles.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: articlesReducer, actions: articlesActions } = store;
