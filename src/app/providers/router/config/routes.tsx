import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteObject } from 'react-router-dom';

export const enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const routes: RouteObject[] = [
    {
        path: AppRoutes.MAIN,
        element: <MainPage/>,
    },
    {
        path: AppRoutes.ABOUT,
        element: <AboutPage/>,
    },
];
