import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAsyncReducer } from 'shared/lib/hooks';
import {
	getArticlesErrorMessage,
	getArticlesHasMore,
	getArticlesPageLimit,
	isArticlesLoaded,
	isArticlesLoading,
} from '../selectors';
import { fetchArticles, fetchNextArticlesPage } from '../services';
import { articlesReducer, getArticles } from '../store';

export const useArticles = () => {
	const dispatch = useAppDispatch();
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(isArticlesLoading);
	const isLoaded = useSelector(isArticlesLoaded);
	const error = useSelector(getArticlesErrorMessage);
	const hasMore = useSelector(getArticlesHasMore);
	const limit = useSelector(getArticlesPageLimit);

	useAsyncReducer({ articles: articlesReducer }, { removeAfterUnmount: false });

	useEffect(() => {
		if (!isLoaded) {
			dispatch(fetchArticles({ page: 1 }));
		}
	}, [dispatch, isLoaded]);

	const fetchNextPage = useCallback(() => {
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	return {
		articles,
		fetchNextPage,
		isLoading,
		error,
		hasMore,
		limit,
	};
};
