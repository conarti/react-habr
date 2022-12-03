import classNames from 'classnames';
import { ArticleGridItem, ArticleListItem, articleConfig } from 'entities/article';
import { memo } from 'react';
import { AppLoader } from 'shared/ui/AppLoader';
import { AppSkeleton } from 'shared/ui/AppSkeleton';
import { AppText } from 'shared/ui/AppText';
import { ArticleViewType } from '../../config';
import styles from './ArticlesView.module.scss';

interface ArticlesViewProps {
	className?: string;
	viewType: ArticleViewType;
	articles: articleConfig.Article[];
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
			{isLoading && viewType === 'grid' && (
				Array.from({ length: 10 }, () => <AppSkeleton height={333} />)
			)}
			{isLoading && viewType === 'list' && (
				Array.from({ length: 3 }, () => <AppSkeleton height={708} />)
			)}
		</div>
	);
});
