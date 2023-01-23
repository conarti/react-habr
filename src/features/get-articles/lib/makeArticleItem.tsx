import { articleConfig, ArticleGridItem, ArticleListItem } from 'entities/article';
import { ArticleViewType } from '../config';

export const makeArticleItem = (article: articleConfig.Article, viewType: ArticleViewType) => {
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
