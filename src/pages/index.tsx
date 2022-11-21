import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';
import { ReactElement } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

export const enum AppRoutes {
	MAIN = '/',
	ABOUT = 'about',
	PROFILE = 'profile',
	NOT_FOUND = '*'
}

const makeProtectedRoute = (route: ReactElement, hasAuth: boolean): ReactElement => {
	if (hasAuth) {
		return route;
	}

	return <Navigate to={AppRoutes.MAIN} />;
};

export const getRoutes = (hasAuth: boolean): RouteObject[] => [
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
		element: makeProtectedRoute(<ProfilePage />, hasAuth),
	},
	{
		path: AppRoutes.NOT_FOUND,
		element: <NotFound />,
	},
];
