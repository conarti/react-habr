import {
	ArticlesView,
	ArticlesViewTypeSelect,
	useArticles,
	useArticlesView,
} from 'features/get-articles';
import { memo } from 'react';

const ArticlesPage = memo(() => {
	const { viewType, setViewType } = useArticlesView();

	const { articles, error, isLoading } = useArticles();

	return (
		<>
			<div className="mb-md">
				<ArticlesViewTypeSelect
					viewType={viewType}
					onChangeViewType={setViewType}
				/>
			</div>
			<ArticlesView
				viewType={viewType}
				articles={articles}
				isLoading={isLoading}
				error={error}
			/>
		</>
	);
});

export default ArticlesPage;
