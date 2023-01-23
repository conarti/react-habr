import { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {
	ArticlesViewSort,
	ArticlesView,
	ArticlesViewTypeSelect,
	useArticles,
	useArticlesView,
	useArticlesSort,
} from 'features/get-articles';
import { AppCard } from 'shared/ui/AppCard';

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

	const {
		sortBy,
		sortOrder,
		setSortBy,
		setSortOrder,
	} = useArticlesSort();

	return (
		<InfiniteScroll
			pageStart={1}
			loadMore={fetchNextPage}
			hasMore={hasMore}
		>
			<AppCard className="mb-md">
				<div className="d-flex items-center">
					<ArticlesViewTypeSelect
						viewType={viewType}
						onChangeViewType={setViewType}
					/>
					<ArticlesViewSort
						className="ml-auto"
						by={sortBy}
						onChangeBy={setSortBy}
						order={sortOrder}
						onChangeOrder={setSortOrder}
					/>
				</div>
			</AppCard>
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
