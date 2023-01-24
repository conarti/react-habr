import classNames from 'classnames';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppButton } from 'shared/ui/AppButton';
import { AppCard } from 'shared/ui/AppCard';
import { Article, ArticleTextBlock } from '../../config/types/article';
import { ArticleHeader } from '../ArticleHeader';
import styles from './index.module.scss';

interface ArticleListItemProps {
	className?: string;
	article: Article;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
	const {
		className,
		article,
	} = props;

	const { t } = useTranslation('articles');
	const navigate = useNavigate();

	const firstTextBlock = useMemo(
		() => article.blocks.find((block) => block.type === 'TEXT') as ArticleTextBlock | undefined,
		[article],
	);

	const contentPreview = useMemo<string[] | null>(
		() => {
			if (!firstTextBlock) {
				return null;
			}

			return firstTextBlock.paragraphs;
		},
		[firstTextBlock],
	);

	const openArticle = useCallback(() => {
		navigate(`${AppRoutes.ARTICLES}/${article.id}`);
	}, [article, navigate]);

	return (
		<AppCard
			className={classNames(styles.articleListItem, className)}
			head={(
				<ArticleHeader
					img={article.img}
					title={article.title}
					subtitle={article.subtitle}
					createdAt={article.createdAt}
					views={article.views}
				/>
			)}
		>
			{contentPreview && (
				<div className={classNames(styles.articleListItemContentPreview)}>
					{contentPreview.map((paragraph) => (
						<p
							className="mb-sm"
							key={paragraph}
						>
							{paragraph}
						</p>
					))}
				</div>
			)}
			<AppButton onClick={openArticle}>{t('Читать дальше')}</AppButton>
		</AppCard>
	);
};
