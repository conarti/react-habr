import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { articleConfig } from 'entities/article';
import { ArticlesSchema } from '../config';
import { fetchArticles } from './services';

export const articlesAdapter = createEntityAdapter<articleConfig.Article>();

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
	(state) => state.articles || articlesAdapter.getInitialState(),
);

const store = createSlice({
	name: 'articles',
	initialState: articlesAdapter.getInitialState<ArticlesSchema>({
		isLoading: true,
		ids: [],
		entities: {},
		isLoaded: false,
		page: 1,
		limit: 8,
		hasMore: true,
	}),
	reducers: {
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		},
	},
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
				articlesAdapter.addMany(state, action.payload);
				state.hasMore = action.payload.length === state.limit;
			})
			.addCase(fetchArticles.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: articlesReducer, actions: articlesActions } = store;
