import { EntityState } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import { articleConfig } from 'entities/article';

export interface ArticlesSchema extends EntityState<articleConfig.Article> {
	isLoading: boolean;
	error?: string;
	isLoaded: boolean;
	page: number;
	limit: number;
	hasMore: boolean;
}

export type ArticleViewType = 'grid' | 'list';

export interface SelectViewButton {
	type: ArticleViewType;
	icon: ReactElement;
}
