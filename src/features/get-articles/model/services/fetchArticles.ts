import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { articleConfig } from 'entities/article';
import { ThunkConfig } from 'shared/config/types';
import {
	getArticlesOrder,
	getArticlesPageLimit,
	getArticlesSearch,
	getArticlesSort,
} from '../selectors';

interface FetchArticlesPayload {
	page: number;
	replace?: boolean;
}

export const fetchArticles = createAsyncThunk<articleConfig.Article[], FetchArticlesPayload, ThunkConfig<string>>(
	'articles/fetchArticles',
	async (payload, thunkAPI) => {
		const { rejectWithValue, extra, getState } = thunkAPI;

		const limit = getArticlesPageLimit(getState());
		const sort = getArticlesSort(getState());
		const order = getArticlesOrder(getState());
		const search = getArticlesSearch(getState());

		try {
			const { data } = await extra.api.get<articleConfig.Article[]>('/articles', {
				params: {
					_page: payload.page,
					_limit: limit,
					_sort: sort,
					_order: order,
					q: search,
				},
			});
			return data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return rejectWithValue(error.response?.data.message ?? `Произошла ошибка при загрузке статей. Код ответа - ${error.response?.status}.`);
			}

			return rejectWithValue('fetchArticles error');
		}
	},
);
