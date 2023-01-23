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
			<div className="d-flex flex-wrap items-center mb-md">
				<ArticlesViewTypeSelect
					className="mr-lg"
					viewType={viewType}
					onChangeViewType={setViewType}
				/>

				<ArticlesCategoryFilter
					value={category}
					onChange={setCategory}
				/>

				<ArticlesViewSearch
					className="ml-auto mr-lg"
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
