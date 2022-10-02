import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { AppLoader } from 'shared/ui/AppLoader';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		this.setState({ hasError: true });
		// eslint-disable-next-line no-console
		console.error(error, errorInfo);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError) {
			return (
				<Suspense fallback={<AppLoader isFill />}>
					<PageError />
				</Suspense>
			);
		}

		return children;
	}
}
