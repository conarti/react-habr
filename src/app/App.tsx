import { AppRouter } from 'app/providers/router';
import classNames from 'classnames';
import { userModel } from 'entities/user';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userModel.userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className={classNames('app')}>
			<Suspense fallback="">
				<Sidebar />
				<div className="app-content">
					<Navbar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
}
