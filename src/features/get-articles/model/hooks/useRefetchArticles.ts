import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks';
import { fetchArticles } from '../services';

export const useRefetchArticles = () => {
	const dispatch = useAppDispatch();

	return useCallback(() => {
		dispatch(fetchArticles({ page: 1, replace: true }));
	}, [dispatch]);
};
