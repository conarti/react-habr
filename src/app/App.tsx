import { AppRouter } from 'app/providers/router';
import classNames from 'classnames';
import { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export function App() {
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
