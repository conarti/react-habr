import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { articleConfig } from 'entities/article';
import { useAppDispatch } from 'shared/lib/hooks';
import { getArticlesCategory } from '../selectors';
import { articlesActions } from '../store';
import { useRefetchArticles } from './useRefetchArticles';

export const useArticlesCategoryFilter = () => {
	const dispatch = useAppDispatch();
	const category = useSelector(getArticlesCategory);

	const refetchArticles = useRefetchArticles();

	const setCategory = useCallback((category: articleConfig.ArticleCategory | undefined) => {
		dispatch(articlesActions.setCategory(category));
		refetchArticles();
	}, [dispatch, refetchArticles]);

	return {
		category,
		setCategory,
	};
};
