import { render, screen } from '@testing-library/react';
import { AppButton } from './AppButton';

describe('AppButton', () => {
	test('render', () => {
		render(<AppButton>Test</AppButton>);
		expect(screen.getByText('Test')).toBeInTheDocument();
	});

	test('clear theme', () => {
		render(<AppButton theme="clear">Test</AppButton>);
		expect(screen.getByText('Test')).toHaveClass('app-button-clear');
	});
});
