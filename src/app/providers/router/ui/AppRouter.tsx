import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from '../config/routes';

const AppRouter = () => {
    const routesElement = useRoutes(routes);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {routesElement}
        </Suspense>
    );
};

export default AppRouter;
