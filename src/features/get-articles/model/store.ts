import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { articleConfig } from 'entities/article';
import { StateSchema } from 'shared/config/types';
import { ArticlesSchema, SortBy, SortOrder } from '../config';
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
		order: 'desc',
		sort: 'createdAt',
	}),
	reducers: {
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		},
		setSortOrder(state, action: PayloadAction<SortOrder>) {
			state.order = action.payload;
		},
		setSortBy(state, action: PayloadAction<SortBy>) {
			state.sort = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticles.pending, (state, action) => {
				state.isLoading = true;
				state.error = '';

				if (action.meta.arg.replace) {
					articlesAdapter.removeAll(state);
				}
			})
			.addCase(fetchArticles.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = '';
				state.isLoaded = true;

				if (action.meta.arg.replace) {
					articlesAdapter.setAll(state, action.payload);
				} else {
					articlesAdapter.addMany(state, action.payload);
				}

				state.hasMore = action.payload.length === state.limit;
			})
			.addCase(fetchArticles.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: articlesReducer, actions: articlesActions } = store;
