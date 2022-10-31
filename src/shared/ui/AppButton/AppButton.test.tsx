import { render, screen } from '@testing-library/react';
import { AppButton, AppButtonTheme } from './AppButton';

describe('AppButton', () => {
	test('render', () => {
		render(<AppButton>Test</AppButton>);
		expect(screen.getByText('Test')).toBeInTheDocument();
	});

	test('clear theme', () => {
		render(<AppButton theme={AppButtonTheme.CLEAR}>Test</AppButton>);
		expect(screen.getByText('Test')).toHaveClass(`app-button-${AppButtonTheme.CLEAR}`);
	});
});
