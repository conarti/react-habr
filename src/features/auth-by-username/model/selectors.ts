import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from './store';

export const getLoginState = (state: StateSchema | undefined) => state?.loginForm ?? initialState;
