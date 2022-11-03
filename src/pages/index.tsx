import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteObject } from 'react-router-dom';

export const enum AppRoutes {
	MAIN = '',
	ABOUT = 'about',
	PROFILE = 'profile',
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
		path: AppRoutes.PROFILE,
		element: <ProfilePage />,
	},
	{
		path: AppRoutes.NOT_FOUND,
		element: <NotFound />,
	},
];
