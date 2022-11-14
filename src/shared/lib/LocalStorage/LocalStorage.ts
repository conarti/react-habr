export class LocalStorage {
	public static set(key: string, value: any) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	public static get(key: string, defaultValue: any = null) {
		const value = localStorage.getItem(key);
		return value !== null ? JSON.parse(value) : defaultValue;
	}

	public static remove(key: string) {
		localStorage.removeItem(key);
	}
}
