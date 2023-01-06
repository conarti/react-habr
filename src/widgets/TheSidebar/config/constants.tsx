import InformationIcon from 'shared/assets/icons/circle-information.svg';
import HouseIcon from 'shared/assets/icons/house-floor.svg';
import ListIcon from 'shared/assets/icons/square-list.svg';
import { TheSidebarLink } from './types';

export const links: TheSidebarLink[] = [
	{
		to: AppRoutes.MAIN,
		label: 'Главная',
		icon: <HouseIcon />,
	},
	{
		to: AppRoutes.ARTICLES,
		label: 'Статьи',
		icon: <ListIcon />,
		needAuth: true,
	},
	{
		to: AppRoutes.ABOUT,
		label: 'О сайте',
		icon: <InformationIcon />,
	},
];
