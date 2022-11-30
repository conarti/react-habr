export interface User {
	id: string;
	username: string;
	avatar: string | null;
}

export interface UserProfile {
	firstname: string;
	lastname: string;
	age: number;
	currency: string;
	country: string;
	city: string;
	username: string;
	avatar: string;
}

export interface UserSchema {
	isLoading: boolean;
	error?: string;
	authData?: User | null;
	profile?: UserProfile;
}
