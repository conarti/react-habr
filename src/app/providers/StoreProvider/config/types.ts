import {
	AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { createReduxStore } from 'app/providers/StoreProvider';
import { AxiosInstance } from 'axios';
import { articleConfig } from 'entities/article';
import { commentConfig } from 'entities/comment';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/user/config';
import { LoginSchema } from 'features/auth-by-username';
import { ArticleCommentsSchema } from 'features/get-article-comments';
import { ArticlesSchema } from 'features/get-articles';
import { CombinedState } from 'redux';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
	loginForm?: LoginSchema;
	articleDetails?: articleConfig.ArticleDetailsSchema;
	articleComments?: ArticleCommentsSchema;
	addComment?: commentConfig.AddCommentSchema;
	articles?: ArticlesSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export interface ThunkExtraArguments {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	state: StateSchema;
	rejectValue: T;
	extra: ThunkExtraArguments;
}
