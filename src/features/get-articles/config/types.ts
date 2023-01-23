import { EntityState } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import { articleConfig } from 'entities/article';

export type SortBy = 'createdAt' | 'views';
export type SortOrder = 'asc' | 'desc';

export interface ArticlesSchema extends EntityState<articleConfig.Article> {
	isLoading: boolean;
	error?: string;
	isLoaded: boolean;
	page: number;
	limit: number;
	hasMore: boolean;
	sort: SortBy;
	order: SortOrder;
	search: string;
	category?: articleConfig.ArticleCategory;
}

export type ArticleViewType = 'grid' | 'list';

export interface SelectViewButton {
	type: ArticleViewType;
	icon: ReactElement;
}
