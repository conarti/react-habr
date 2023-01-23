import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAsyncReducer } from 'shared/lib/hooks';
import { LocalStorage } from 'shared/lib/LocalStorage/LocalStorage';
import { ArticleViewType, VIEW_TYPE_LOCAL_STORAGE_KEY } from '../config';
import {
	getArticlesErrorMessage,
	getArticlesHasMore,
	getArticlesOrder,
	getArticlesPageLimit,
	getArticlesSort,
	isArticlesLoaded,
	isArticlesLoading,
} from './selectors';
import { fetchArticles, fetchNextArticlesPage } from './services';
import { articlesActions, articlesReducer, getArticles } from './store';

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

export const useArticlesView = () => {
	const initialType = LocalStorage.get(VIEW_TYPE_LOCAL_STORAGE_KEY, 'grid');
	const [viewType, setViewTypeInState] = useState<ArticleViewType>(initialType);

	const setViewType = useCallback((newType: ArticleViewType) => {
		LocalStorage.set(VIEW_TYPE_LOCAL_STORAGE_KEY, newType);
		setViewTypeInState(newType);
	}, []);

	return {
		viewType,
		setViewType,
	};
};

export const useArticlesSort = () => {
	const dispatch = useAppDispatch();
	const sortBy = useSelector(getArticlesSort);
	const sortOrder = useSelector(getArticlesOrder);

	const refetchArticles = useCallback(() => {
		dispatch(fetchArticles({ page: 1, replace: true }));
	}, [dispatch]);

	const setSortBy = useCallback((sortBy) => {
		dispatch(articlesActions.setSortBy(sortBy));
		dispatch(articlesActions.setPage(1));
		refetchArticles();
	}, [dispatch, refetchArticles]);

	const setSortOrder = useCallback((order) => {
		dispatch(articlesActions.setSortOrder(order));
		dispatch(articlesActions.setPage(1));
		refetchArticles();
	}, [dispatch, refetchArticles]);

	return {
		sortBy,
		setSortBy,
		sortOrder,
		setSortOrder,
	};
};
