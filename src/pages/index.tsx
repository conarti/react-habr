import { ReactElement } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';
import { UserProfilePage } from 'pages/UserProfilePage';

export const enum AppRoutes {
	MAIN = '/',
	ABOUT = 'about',
	PROFILE = 'profile',
	ARTICLES = 'articles',
	ARTICLE_DETAILS = 'articles/:id',
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
		path: `${AppRoutes.PROFILE}/:id`,
		element: makeProtectedRoute(<UserProfilePage />, hasAuth),
	},
	{
		path: AppRoutes.ARTICLES,
		element: makeProtectedRoute(<ArticlesPage />, hasAuth),
	},
	{
		path: AppRoutes.ARTICLE_DETAILS,
		element: makeProtectedRoute(<ArticleDetailsPage />, hasAuth),
	},
	{
		path: AppRoutes.NOT_FOUND,
		element: <NotFound />,
	},
];
