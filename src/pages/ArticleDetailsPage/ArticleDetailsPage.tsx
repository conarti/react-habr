import { ArticleDetails } from 'entities/article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const ArticleDetailsPage = memo(() => {
	const { id } = useParams<{ id: string }>();
	const { t } = useTranslation('article-details');

	if (!id) {
		return <div>{t('Статья не найдена')}</div>;
	}

	return <ArticleDetails id={id} />;
});

export default ArticleDetailsPage;
