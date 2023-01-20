import { useCallback, useRef } from 'react';

export const useThrottle = (callback: (...args: unknown[]) => void, delay: number = 500) => {
	const throttleRef = useRef(false);

	return useCallback(() => {
		if (!throttleRef.current) {
			callback();
			throttleRef.current = true;

			setTimeout(() => {
				throttleRef.current = false;
			}, delay);
		}
	}, [callback, delay]);
};
