import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { AppLoader } from 'shared/ui/AppLoader';
import { routes } from '../config/routes';

const AppRouter = () => {
	const routesElement = useRoutes(routes);

	return (
		<div className="page-wrapper">
			<Suspense fallback={<AppLoader isFill />}>
				{routesElement}
			</Suspense>
		</div>
	);
};

export default AppRouter;
