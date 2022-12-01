import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';
import { articleConfig } from 'entities/article';

export const fetchArticles = createAsyncThunk<articleConfig.Article[], void, ThunkConfig<string>>(
	'articles/fetchArticles',
	async (_, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI;

		try {
			const { data } = await extra.api.get<articleConfig.Article[]>('/articles');
			return data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return rejectWithValue(error.response?.data.message ?? `Произошла ошибка при загрузке статей. Код ответа - ${error.response?.status}.`);
			}
			return rejectWithValue('fetchArticles error');
		}
	},
);
