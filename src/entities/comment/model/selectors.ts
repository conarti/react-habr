import { StateSchema } from 'shared/config/types';

export const getAddCommentText = (state: StateSchema) => state.addComment?.text ?? '';

export const getAddCommentError = (state: StateSchema) => state.addComment?.error;
