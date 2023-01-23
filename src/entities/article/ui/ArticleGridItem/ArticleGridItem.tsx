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
			<div className="d-flex column h-100">
				<h2 className="mb-sm">{article.title}</h2>
				<div className="d-flex items-center mt-auto">
					<div className="d-flex column">
						<ArticleInfo.Created
							className="mb-sm"
							value={article.createdAt}
						/>
						<ArticleInfo.Views value={article.views} />
					</div>
					<AppButton
						className="ml-auto align-self-end"
						theme="primary"
						size="sm"
						onClick={openArticle}
					>
						{t('Читать')}
					</AppButton>
				</div>
			</div>
		</AppCard>
	);
};
