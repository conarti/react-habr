import { StateSchema } from 'shared/config/types';
import { initialState } from './store';

export const getLoginState = (state: StateSchema | undefined) => state?.loginForm ?? initialState;
