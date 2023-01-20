import { useCallback, useRef } from 'react';

export const useDebounce = (callback: (...args: unknown[]) => void, delay: number = 500) => {
	const timer = useRef<ReturnType<typeof window.setTimeout> | null>(null);

	return useCallback((...args: unknown[]) => {
		if (timer.current) {
			clearTimeout(timer.current);
		}

		timer.current = setTimeout(() => {
			callback(...args);
		}, delay);
	}, [callback, delay]);
};
