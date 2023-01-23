import classNames from 'classnames';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { articleConfig } from 'entities/article';
import FileXmarkAltIcon from 'shared/assets/icons/file-xmark-alt.svg';
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

	const { t } = useTranslation('articles');
	const hasNotArticles = useMemo(() => articles.length === 0, [articles]);

	if (error) return <AppText message={error} />;

	return (
		<>
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
			{hasNotArticles && !isLoading && (
				<p className={classNames(styles.articlesViewEmptyMessage)}>
					<FileXmarkAltIcon className={classNames('app-icon', styles.articlesViewEmptyMessageIcon)} />
					&nbsp;
					{t('view.emptyMessage')}
				</p>
			)}
		</>
	);
});
