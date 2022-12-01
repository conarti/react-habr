import classNames from 'classnames';
import { ArticleGridItem, ArticleListItem, articleConfig } from 'entities/article';
import { memo } from 'react';
import { AppLoader } from 'shared/ui/AppLoader';
import { AppText } from 'shared/ui/AppText';
import { ArticleViewType } from '../../config';
import { useArticles } from '../../model';
import styles from './ArticlesView.module.scss';

interface ArticlesViewProps {
	className?: string;
	viewType: ArticleViewType;
}

export const ArticlesView = memo((props: ArticlesViewProps) => {
	const {
		className,
		viewType,
	} = props;

	const { articles, error, isLoading } = useArticles();

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

	if (isLoading) return <AppLoader isAbsolute />;

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
		</div>
	);
});
