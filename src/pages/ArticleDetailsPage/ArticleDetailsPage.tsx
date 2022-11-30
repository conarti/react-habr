import classNames from 'classnames';
import { ArticleDetails } from 'entities/article';
import { ArticleComments } from 'features/get-article-comments';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import styles from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = memo(() => {
	const { id } = useParams<{ id: string }>();
	const { t } = useTranslation('article-details');

	if (!id) {
		return <div>{t('Статья не найдена')}</div>;
	}

	return (
		<>
			<ArticleDetails
				className={classNames(styles.articleDetailsPageArticle)}
				id={id}
			/>
			<ArticleComments articleId={id} />
		</>
	);
});

export default ArticleDetailsPage;
