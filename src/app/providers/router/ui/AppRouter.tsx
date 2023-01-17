import { Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { getRoutes } from 'pages';
import { userModel } from 'entities/user';
import { AppLoader } from 'shared/ui/AppLoader';

const AppRouter = () => {
	const hasAuth = useSelector(userModel.hasAuth);
	const isAuthDataLoaded = useSelector(userModel.isAuthDataLoaded);

	const routes = useMemo(() => getRoutes(hasAuth), [hasAuth]);

	const routesElement = useRoutes(routes);

	return (
		<div className="app-page">
			<Suspense fallback={(
				<AppLoader
					isAbsolute
					delay={400}
				/>
			)}
			>
				{
					isAuthDataLoaded
						? routesElement
						: <AppLoader isAbsolute />
				}
			</Suspense>
		</div>
	);
};

export default AppRouter;
