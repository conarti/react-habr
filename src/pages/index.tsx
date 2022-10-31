import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { RouteObject } from 'react-router-dom';

export const enum AppRoutes {
	MAIN = '',
	ABOUT = 'about',
	NOT_FOUND = '*'
}

export const routes: RouteObject[] = [
	{
		path: AppRoutes.MAIN,
		element: <MainPage />,
	},
	{
		path: AppRoutes.ABOUT,
		element: <AboutPage />,
	},
	{
		path: AppRoutes.NOT_FOUND,
		element: <NotFound />,
	},
];
