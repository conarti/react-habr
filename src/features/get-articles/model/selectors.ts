import { StateSchema } from 'app/providers/StoreProvider';
import { articlesAdapter } from './store';

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
	(state) => state.articles || articlesAdapter.getInitialState(),
);

export const isArticlesLoading = (state: StateSchema) => state.articles?.isLoading ?? true;

export const isArticlesLoaded = (state: StateSchema) => state.articles?.isLoaded;

export const getArticlesErrorMessage = (state: StateSchema) => state.articles?.error;
