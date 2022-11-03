import { AppRoutes } from 'pages';
import InformationIcon from 'shared/assets/icons/circle-information.svg';
import HouseIcon from 'shared/assets/icons/house-floor.svg';

export const links = [
	{
		to: AppRoutes.MAIN,
		label: 'Главная',
		icon: <HouseIcon />,
	},
	{
		to: AppRoutes.ABOUT,
		label: 'О сайте',
		icon: <InformationIcon />,
	},
];
