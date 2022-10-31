import { routes } from 'pages';
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { AppLoader } from 'shared/ui/AppLoader';

const AppRouter = () => {
	const routesElement = useRoutes(routes);

	return (
		<div className="app-page">
			<Suspense fallback={<AppLoader isAbsolute />}>
				{routesElement}
			</Suspense>
		</div>
	);
};

export default AppRouter;
