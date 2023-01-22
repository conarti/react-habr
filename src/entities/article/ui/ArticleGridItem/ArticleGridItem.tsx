import classNames from 'classnames';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppButton } from 'shared/ui/AppButton';
import { AppCard } from 'shared/ui/AppCard';
import { Article } from '../../config/types/article';
import { ArticleInfo } from '../ArticleInfo';
import styles from './ArticleGridItem.module.scss';

interface ArticleGridItemProps {
	className?: string;
	article: Article;
}

export const ArticleGridItem = (props: ArticleGridItemProps) => {
	const {
		className,
		article,
	} = props;

	const { t } = useTranslation('articles');
	const navigate = useNavigate();

	const openArticle = useCallback(() => {
		navigate(`${AppRoutes.ARTICLES}/${article.id}`);
	}, [article, navigate]);

	return (
		<AppCard
			className={classNames(styles.articleGridItem, className)}
			cover={article.img}
		>
			<ArticleInfo.Row
				className="mb-md"
				justify="between"
			>
				<ArticleInfo.Created value={article.createdAt} />
				<ArticleInfo.Views value={article.views} />
			</ArticleInfo.Row>
			<h2 className="mb-sm">{article.title}</h2>
			<div className={classNames(styles.articleGridItemLink)}>
				<AppButton
					className="stretched-link"
					theme="clear"
					onClick={openArticle}
				>
					{t('Читать')}
				</AppButton>
			</div>
		</AppCard>
	);
};
