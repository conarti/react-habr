import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/types';
import { useEffect } from 'react';
import { useStore } from 'react-redux';

type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
}

interface AsyncReducerHookOptions {
	removeAfterUnmount?: boolean;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

export const useAsyncReducer = (reducers: ReducersList, options: AsyncReducerHookOptions = {}) => {
	const { removeAfterUnmount = false } = options;
	const store = useStore() as ReduxStoreWithManager;

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
			store.reducerManager.add(name, reducer);
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
					store.reducerManager.remove(name);
				});
			}
		};
		// eslint-disable-next-line
	}, []);
};
