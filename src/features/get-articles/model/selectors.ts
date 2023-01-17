import { StateSchema } from 'shared/config/types';

export const isArticlesLoading = (state: StateSchema) => state.articles?.isLoading ?? false;

export const isArticlesLoaded = (state: StateSchema) => state.articles?.isLoaded;

export const getArticlesErrorMessage = (state: StateSchema) => state.articles?.error;

export const getArticlesPageLimit = (state: StateSchema) => state.articles?.limit ?? 8;

export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore;

export const getArticlesPage = (state: StateSchema) => state.articles?.page ?? 1;
