import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';
import { Article } from '../config/types/article';

export const fetchArticleByID = createAsyncThunk<Article, string, ThunkConfig<string>>(
	'article/fetchArticleByID',
	async (articleId, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI;

		try {
			const { data } = await extra.api.get<Article>(`/articles/${articleId}`);
			return data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return rejectWithValue(error.response?.data.message ?? `Произошла ошибка при загрузке статьи. Код ответа - ${error.response?.status}.`);
			}
			console.error(error);
			return rejectWithValue('fetchProfile error');
		}
	},
);
