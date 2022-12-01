import { ArticlesView } from 'entities/article';
import { memo } from 'react';

const ArticlesPage = memo(() => (
	<ArticlesView
		viewType="grid"
		articles={[]}
	/>
));

export default ArticlesPage;
