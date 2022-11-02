export class LocalStorage {
	public static set(key: string, value: any) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	public static get(key: string, defaultValue?: any) {
		return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
	}

	public static remove(key: string) {
		localStorage.removeItem(key);
	}
}
