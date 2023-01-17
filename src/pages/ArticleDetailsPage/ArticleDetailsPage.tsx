import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleComments } from 'features/get-article-comments';
import { ArticleDetails } from 'entities/article';

const ArticleDetailsPage = memo(() => {
	const { id } = useParams<{ id: string }>();
	const { t } = useTranslation('article-details');

	if (!id) {
		return <div>{t('Статья не найдена')}</div>;
	}

	return (
		<>
			<ArticleDetails
				className="mb-lg"
				id={id}
			/>
			<ArticleComments articleId={id} />
		</>
	);
});

export default ArticleDetailsPage;
