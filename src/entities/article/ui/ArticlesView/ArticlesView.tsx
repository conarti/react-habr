import classNames from 'classnames';
import { useMemo } from 'react';
import { ArticleGridItem } from '../ArticleGridItem';
import { ArticleListItem } from '../ArticleListItem';
import { Article, ArticleListView } from '../../config/types/article';
import styles from './ArticlesView.module.scss';

interface ArticlesViewProps {
	className?: string;
	articles: Article[];
	isLoading?: boolean;
	viewType?: ArticleListView;
}

export const ArticlesView = (props: ArticlesViewProps) => {
	const {
		className,
		articles,
		viewType = 'grid',
		isLoading = false,
	} = props;

	const renderArticle = (article: Article) => {
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

	const isListView = useMemo(() => viewType === 'list', [viewType]);
	const isGridView = useMemo(() => viewType === 'grid', [viewType]);

	return (
		<div className={classNames(
			styles.articlesView,
			className,
			{
				[styles.isGrid]: isGridView,
				[styles.isList]: isListView,
			},
		)}
		>
			{articles.map(renderArticle)}
		</div>
	);
};
