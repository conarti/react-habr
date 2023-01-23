import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useDebounce } from 'shared/lib/hooks';
import { getArticlesSearch } from '../selectors';
import { fetchArticles } from '../services';
import { articlesActions } from '../store';

export const useArticlesSearch = () => {
	const dispatch = useAppDispatch();
	const search = useSelector(getArticlesSearch);

	const refetchArticles = useCallback(() => {
		dispatch(fetchArticles({ page: 1, replace: true }));
	}, [dispatch]);

	const deboncedRefetchArticles = useDebounce(refetchArticles);

	const setSearch = useCallback((search: string) => {
		dispatch(articlesActions.setSearch(search));
		dispatch(articlesActions.setPage(1));
		deboncedRefetchArticles();
	}, [deboncedRefetchArticles, dispatch]);

	return ({
		search,
		setSearch,
	});
};
