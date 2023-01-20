import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'shared/config/types/store';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
}

interface AsyncReducerHookOptions {
	removeAfterUnmount?: boolean;
}

const initReducerAction = (name: string) => ({ type: `@INIT ${name} reducer` });
const destroyReducerAction = (name: string) => ({ type: `@DESTROY ${name} reducer` });

export const useAsyncReducer = (reducers: ReducersList, options: AsyncReducerHookOptions = {}) => {
	const { removeAfterUnmount = true } = options;
	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useAppDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]) => {
			if (!store.reducerManager.isReducerMounted(name as StateSchemaKey)) {
				store.reducerManager.add(name as StateSchemaKey, reducer);
				dispatch(initReducerAction(name));
			}
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]) => {
					store.reducerManager.remove(name as StateSchemaKey);
					dispatch(destroyReducerAction(name));
				});
			}
		};
		// eslint-disable-next-line
	}, []);
};
