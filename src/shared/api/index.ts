import axios from 'axios';
import { userConfig } from 'entities/user';
import { LocalStorage } from 'shared/lib/LocalStorage/LocalStorage';

export const $api = axios.create({
	baseURL: process.env.API_URL,
	headers: {
		authorization: LocalStorage.get(userConfig.USER_LOCAL_STORAGE_KEY, undefined),
	},
});
