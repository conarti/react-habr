import { EntityState } from '@reduxjs/toolkit';
import { articleConfig } from 'entities/article';
import { ReactElement } from 'react';

export interface ArticlesSchema extends EntityState<articleConfig.Article>{
	isLoading: boolean;
	error?: string;
	isLoaded: boolean;
}

export type ArticleViewType = 'grid' | 'list';

export interface SelectViewButton {
	type: ArticleViewType;
	icon: ReactElement;
}
