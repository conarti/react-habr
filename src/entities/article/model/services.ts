import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { userModel } from 'entities/user';
import { Article } from '../config/types/article';
import { getArticleDetails } from './selectors';

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
			return rejectWithValue('article/fetchArticleByID error');
		}
	},
);

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
	'article/addCommentForArticle',
	async (message, thunkApi) => {
		const {
			extra,
			rejectWithValue,
			getState,
		} = thunkApi;

		const userData = userModel.getAuthData(getState());
		const article = getArticleDetails(getState());

		try {
			const { data } = await extra.api.post<Comment>('/comments', {
				articleId: article?.id,
				userId: userData?.id,
				message,
			});

			return data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return rejectWithValue(error.response?.data.message ?? `Произошла ошибка при создании комментария. Код ответа - ${error.response?.status}.`);
			}
			return rejectWithValue('article/addCommentForArticle error');
		}
	},
);
