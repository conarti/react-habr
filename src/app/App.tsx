import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import classNames from 'classnames';
import { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export function App() {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', theme)}>
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
