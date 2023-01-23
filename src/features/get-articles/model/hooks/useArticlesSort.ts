import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { getArticlesOrder, getArticlesSort } from '../selectors';
import { articlesActions } from '../store';
import { useRefetchArticles } from './useRefetchArticles';

export const useArticlesSort = () => {
	const dispatch = useAppDispatch();
	const sortBy = useSelector(getArticlesSort);
	const sortOrder = useSelector(getArticlesOrder);

	const refetchArticles = useRefetchArticles();

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
