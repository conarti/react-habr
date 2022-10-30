import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/user/config';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
}
