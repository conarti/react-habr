import { userConfig } from 'entities/user';

export interface Comment {
	id: string;
	user: userConfig.User;
	message: string;
}

export interface CommentSchema {}
