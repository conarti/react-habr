import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/auth-by-username/config/types';
import { loginByUserName } from './services/loginByUserName';

const initialState: LoginSchema = {
	username: '',
	password: '',
	isLoading: false,
};

export const store = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByUserName.pending, (state) => {
				state.isLoading = true;
				state.error = '';
			})
			.addCase(loginByUserName.fulfilled, (state) => {
				state.isLoading = false;
				state.error = '';
			})
			.addCase(loginByUserName.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

// FIXME: remove renames
export const { actions: loginActions, reducer: loginReducer } = store;
