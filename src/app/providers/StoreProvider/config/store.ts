import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userModel } from 'entities/user';
import { loginReducer } from 'features/auth-by-username';
import { StateSchema } from './types';

export const createReduxStore = (initialState?: StateSchema) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userModel.userReducer,
		loginForm: loginReducer,
	};

	return configureStore<StateSchema>({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
};
