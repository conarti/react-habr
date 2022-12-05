import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesHasMore, getArticlesPage, isArticlesLoading } from '../selectors';
import { fetchArticles } from './fetchArticles';
import { articlesActions } from '../store';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
	'articles/fetchNextArticlesPage',
	async (_, thunkApi) => {
		const { getState, dispatch } = thunkApi;
		const hasMore = getArticlesHasMore(getState());
		const page = getArticlesPage(getState());
		const isLoading = isArticlesLoading(getState());

		if (hasMore && !isLoading) {
			dispatch(articlesActions.setPage(page + 1));
			dispatch(fetchArticles({
				page: page + 1,
			}));
		}
	},
);
