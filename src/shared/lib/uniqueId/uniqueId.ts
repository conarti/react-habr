export const uniqueId = ((() => {
	let counter = 0;

	return (prefix?: string) => {
		counter += 1;
		return `${prefix || ''}${counter}`;
	};
})());
