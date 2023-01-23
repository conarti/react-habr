import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks';
import { fetchArticles } from '../services';
import { articlesActions } from '../store';

export const useRefetchArticles = () => {
	const dispatch = useAppDispatch();

	return useCallback(() => {
		dispatch(articlesActions.setPage(1));
		dispatch(fetchArticles({ page: 1, replace: true }));
	}, [dispatch]);
};
