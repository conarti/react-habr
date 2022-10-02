import { render, screen } from '@testing-library/react';
import { AppButton, ThemeButton } from 'shared/ui/AppButton';

describe('AppButton', () => {
	test('render', () => {
		render(<AppButton>Test</AppButton>);
		expect(screen.getByText('Test')).toBeInTheDocument();
	});

	test('clear theme', () => {
		render(<AppButton theme={ThemeButton.CLEAR}>Test</AppButton>);
		expect(screen.getByText('Test')).toHaveClass(ThemeButton.CLEAR);
	});
});
