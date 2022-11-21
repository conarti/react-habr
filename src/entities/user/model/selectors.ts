import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthData = (state: StateSchema) => state.user.authData;

export const isAuthDataLoaded = createSelector(getAuthData, (authData) => authData !== undefined);

export const hasAuth = createSelector(isAuthDataLoaded, getAuthData, (isAuthDataLoaded, authData) => {
	if (isAuthDataLoaded) {
		return authData !== null;
	}

	return false;
});

export const getProfile = (state: StateSchema) => state.user.profile ?? null;

export const getIsLoading = (state: StateSchema) => state.user.isLoading;

export const getError = (state: StateSchema) => state.user.error ?? null;
