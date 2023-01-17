import { StateSchema } from 'shared/config/types';
import { commentsAdapter } from './store';

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
	(state) => state.articleComments || commentsAdapter.getInitialState(),
);

export const isArticleCommentsLoading = (state: StateSchema) => state.articleComments?.isLoading ?? false;

export const getArticleCommentsErrorMessage = (state: StateSchema) => state.articleComments?.error;
