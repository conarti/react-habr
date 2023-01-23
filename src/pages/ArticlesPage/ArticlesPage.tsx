import { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {
	ArticlesCategoryFilter,
	ArticlesView,
	ArticlesViewSearch,
	ArticlesViewSort,
	ArticlesViewTypeSelect,
	useArticles, useArticlesSearch,
	useArticlesSort,
	useArticlesView,
	useArticlesCategoryFilter,
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

	const {
		search,
		setSearch,
	} = useArticlesSearch();

	const {
		category,
		setCategory,
	} = useArticlesCategoryFilter();

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
					<div className="ml-auto d-flex items-center">
						<ArticlesViewSearch
							className="mr-lg"
							value={search}
							onInput={setSearch}
						/>
						<ArticlesViewSort
							by={sortBy}
							onChangeBy={setSortBy}
							order={sortOrder}
							onChangeOrder={setSortOrder}
						/>
					</div>
				</div>
			</AppCard>

			<AppCard className="mb-md">
				<ArticlesCategoryFilter
					value={category}
					onChange={setCategory}
				/>
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
