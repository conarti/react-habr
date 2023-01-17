import classNames from 'classnames';
import { memo } from 'react';
import { articleConfig, ArticleGridItem, ArticleListItem } from 'entities/article';
import { AppText } from 'shared/ui/AppText';
import { ArticleViewType } from '../../config';
import { makeSkeletons } from '../../lib';
import styles from './ArticlesView.module.scss';

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

	const renderArticle = (article: articleConfig.Article) => {
		switch (viewType) {
		case 'grid':
			return (
				<ArticleGridItem
					key={article.id}
					article={article}
				/>
			);
		case 'list':
			return (
				<ArticleListItem
					key={article.id}
					article={article}
				/>
			);
		default:
			throw new Error(`no component specified for view type "${viewType}"`);
		}
	};

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
			{articles.map(renderArticle)}
			{isLoading && makeSkeletons(pageLimit, viewType)}
		</div>
	);
});
