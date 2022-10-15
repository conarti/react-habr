import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface AppPortalProps {
	children: ReactNode;
  to: string | HTMLElement;
}

export const AppPortal = (props: AppPortalProps) => {
	const { children, to } = props;

	if (typeof to === 'string') {
		const element = document.querySelector(to);

		if (element === null) {
			throw new Error(`can't find portal target element with selector "${to}"`);
		}

		return createPortal(children, element);
	}

	return createPortal(children, to);
};
