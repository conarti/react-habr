import classNames from 'classnames';
import { Article, ArticleTextBlock } from 'entities/article/config/types/article';
import { AppRoutes } from 'pages';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppButton } from 'shared/ui/AppButton';
import { AppCard } from 'shared/ui/AppCard';
import { ArticleInfo } from '../ArticleInfo';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
	className?: string;
	article: Article;
}

interface ArticleListItemHeadProps {
	title: string;
	subtitle: string;
	createdAt: string;
	views: number;
}

const ArticleListItemHead = (props: ArticleListItemHeadProps) => {
	const {
		title,
		subtitle,
		createdAt,
		views,
	} = props;

	return (
		<div>
			<div className={classNames(styles.articleListItemHeadRow)}>
				<h2 className="h1">{title}</h2>
				<ArticleInfo.Created value={createdAt} />
			</div>
			<div className={classNames(styles.articleListItemHeadRow)}>
				<h3 className="h2 m-none">{subtitle}</h3>
				<ArticleInfo.Views value={views} />
			</div>
		</div>
	);
};

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
				<ArticleListItemHead
					title={article.title}
					subtitle={article.subtitle}
					createdAt={article.createdAt}
					views={article.views}
				/>
			)}
		>
			<img
				className={classNames(styles.articleListItemCover)}
				src={article.img}
				alt={article.title}
			/>
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
