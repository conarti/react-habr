import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { articleConfig } from 'entities/article';
import { ThunkConfig } from 'shared/config/types';
import { getArticlesPageLimit } from '../selectors';

interface FetchArticlesPayload {
	page: number;
}

export const fetchArticles = createAsyncThunk<articleConfig.Article[], FetchArticlesPayload, ThunkConfig<string>>(
	'articles/fetchArticles',
	async (payload, thunkAPI) => {
		const { rejectWithValue, extra, getState } = thunkAPI;

		const limit = getArticlesPageLimit(getState());

		try {
			const { data } = await extra.api.get<articleConfig.Article[]>('/articles', {
				params: {
					_page: payload.page,
					_limit: limit,
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
