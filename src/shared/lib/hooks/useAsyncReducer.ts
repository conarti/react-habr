import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/types';

type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
}

interface AsyncReducerHookOptions {
	removeAfterUnmount?: boolean;
}

export const useAsyncReducer = (reducers: ReducersList, options: AsyncReducerHookOptions = {}) => {
	const { removeAfterUnmount = true } = options;
	const store = useStore() as ReduxStoreWithManager;

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]) => {
			store.reducerManager.add(name as StateSchemaKey, reducer);
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]) => {
					store.reducerManager.remove(name as StateSchemaKey);
				});
			}
		};
		// eslint-disable-next-line
	}, []);
};
