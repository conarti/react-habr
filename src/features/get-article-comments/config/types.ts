import { EntityState } from '@reduxjs/toolkit';
import { commentConfig } from 'entities/comment';

export interface ArticleCommentsSchema extends EntityState<commentConfig.Comment>{
	isLoading: boolean;
	error?: string;
}
