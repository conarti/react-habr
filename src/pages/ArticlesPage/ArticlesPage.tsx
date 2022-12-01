import { ArticlesView, ArticlesViewTypeSelect, useArticlesView } from 'features/get-articles';
import { memo } from 'react';

const ArticlesPage = memo(() => {
	const { viewType, setViewType } = useArticlesView();

	return (
		<>
			<div className="mb-md">
				<ArticlesViewTypeSelect
					viewType={viewType}
					onChangeViewType={setViewType}
				/>
			</div>
			<ArticlesView viewType={viewType} />
		</>
	);
});

export default ArticlesPage;
