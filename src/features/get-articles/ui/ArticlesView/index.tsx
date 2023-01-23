import classNames from 'classnames';
import { memo } from 'react';
import { articleConfig } from 'entities/article';
import { AppText } from 'shared/ui/AppText';
import { ArticleViewType } from '../../config';
import { makeArticleSkeletons, makeArticleItem } from '../../lib';
import styles from './index.module.scss';

interface ArticlesViewProps {
	className?: string;
	viewType: ArticleViewType;
	articles: articleConfig.Article[];
	pageLimit: number;
	isLoading: boolean;
	error?: string;
}

export const ArticlesView = memo((props: ArticlesViewProps) => {
	const {
		className,
		viewType,
		articles,
		isLoading,
		error,
		pageLimit,
	} = props;

	if (error) return <AppText message={error} />;

	return (
		<div className={classNames(
			styles.articlesView,
			className,
			{
				[styles.isGrid]: viewType === 'grid',
			},
		)}
		>
			{articles.map((article) => makeArticleItem(article, viewType))}
			{isLoading && makeArticleSkeletons(pageLimit, viewType)}
		</div>
	);
});
