import {
	ArticlesView, ArticlesViewTypeSelect, useArticles, useArticlesView,
} from 'features/get-articles';
import { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

const ArticlesPage = memo(() => {
	const {
		viewType,
		setViewType,
	} = useArticlesView();

	const {
		articles,
		error,
		isLoading,
		fetchNextPage,
		hasMore,
		limit,
	} = useArticles();

	return (
		<InfiniteScroll
			pageStart={1}
			loadMore={fetchNextPage}
			hasMore={hasMore}
		>
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
				pageLimit={limit}
			/>
		</InfiniteScroll>
	);
});

export default ArticlesPage;
