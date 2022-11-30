import { userConfig } from 'entities/user';

export interface Comment {
	id: string;
	user: userConfig.User;
	message: string;
}

export interface AddCommentSchema {
	text?: string;
	error?: string;
	isLoading: boolean;
}
