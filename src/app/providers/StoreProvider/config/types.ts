import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/user/config';
import { LoginSchema } from 'features/auth-by-username';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
	loginForm: LoginSchema;
}
