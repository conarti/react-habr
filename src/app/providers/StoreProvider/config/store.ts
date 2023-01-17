import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { counterReducer } from 'entities/Counter';
import { userModel } from 'entities/user';
import { $api } from 'shared/api';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './types';

export const createReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userModel.userReducer,
		...asyncReducers,
	};

	const reducerManager = createReducerManager(rootReducer);

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: {
				extraArgument: {
					api: $api,
				},
			},
		}),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};
