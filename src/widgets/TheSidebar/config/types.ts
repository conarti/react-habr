import { ReactElement } from 'react';

export interface TheSidebarLink {
	to: AppRoutes;
	label: string;
	icon: ReactElement;
	needAuth?: boolean;
}
