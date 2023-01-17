import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { commentConfig } from 'entities/comment';

export const fetchCommentsByArticleId = createAsyncThunk<commentConfig.Comment[], string, ThunkConfig<string>>(
	'article/fetchCommentsByArticleId',
	async (articleId, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI;

		try {
			const { data } = await extra.api.get<commentConfig.Comment[]>('/comments', {
				params: {
					articleId,
					_expand: 'user',
				},
			});
			return data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return rejectWithValue(error.response?.data.message ?? `Произошла ошибка при загрузке комментариев статьи. Код ответа - ${error.response?.status}.`);
			}
			return rejectWithValue('fetchCommentsByArticleId error');
		}
	},
);
