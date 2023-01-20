import classNames from 'classnames';
import { Suspense, useEffect } from 'react';
import { AppRouter } from 'app/providers/router';
import { TheHeader } from 'widgets/TheHeader';
import { TheSidebar } from 'widgets/TheSidebar';
import { userModel } from 'entities/user';
import { useAppDispatch } from 'shared/lib/hooks';

export const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(userModel.userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className={classNames('app')}>
			<Suspense fallback="">
				<TheSidebar />
				<div className="app-content">
					<TheHeader />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
