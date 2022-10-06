import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

const EXPANDED_CLASS_NAME = 'expanded';
const TEST_ID = 'sidebar';

describe('Sidebar', () => {
	test('should render', () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
	});

	test('should be collapsed by default', () => {
		renderWithTranslation(<Sidebar />);
		const sidebarEl = screen.getByTestId(TEST_ID);

		expect(sidebarEl).not.toHaveClass(EXPANDED_CLASS_NAME);
	});

	test('collapse on mouse over/out', () => {
		renderWithTranslation(<Sidebar />);
		const sidebarEl = screen.getByTestId(TEST_ID);

		fireEvent.mouseOver(sidebarEl);
		expect(sidebarEl).toHaveClass(EXPANDED_CLASS_NAME);

		fireEvent.mouseOut(sidebarEl);
		expect(sidebarEl).not.toHaveClass(EXPANDED_CLASS_NAME);
	});

	test('collapse on focus/blur', () => {
		renderWithTranslation(<Sidebar />);
		const sidebarEl = screen.getByTestId(TEST_ID);

		fireEvent.focus(sidebarEl);
		expect(sidebarEl).toHaveClass(EXPANDED_CLASS_NAME);

		fireEvent.blur(sidebarEl);
		expect(sidebarEl).not.toHaveClass(EXPANDED_CLASS_NAME);
	});
});
