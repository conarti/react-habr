import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useDebounce } from 'shared/lib/hooks';
import { getArticlesSearch } from '../selectors';
import { articlesActions } from '../store';
import { useRefetchArticles } from './useRefetchArticles';

export const useArticlesSearch = () => {
	const dispatch = useAppDispatch();
	const search = useSelector(getArticlesSearch);

	const refetchArticles = useRefetchArticles();

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
