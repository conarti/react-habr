import { StateSchema } from 'shared/config/types';

export const getArticleDetails = (state: StateSchema) => state.articleDetails?.data ?? null;

export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading ?? false;

export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error ?? null;
