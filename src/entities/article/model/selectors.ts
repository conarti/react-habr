import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetails = (state: StateSchema) => state.articleDetails?.data ?? null;

export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading ?? false;

export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error ?? null;
