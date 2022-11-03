import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { TheSidebar } from './TheSidebar';

const EXPANDED_CLASS_NAME = 'expanded';
const TEST_ID = 'sidebar';

describe('Sidebar', () => {
	test('should render', () => {
		componentRender(<TheSidebar />);
		expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
	});

	test('should be collapsed by default', () => {
		componentRender(<TheSidebar />);
		const sidebarEl = screen.getByTestId(TEST_ID);

		expect(sidebarEl).not.toHaveClass(EXPANDED_CLASS_NAME);
	});

	test('collapse on mouse over/out', () => {
		componentRender(<TheSidebar />);
		const sidebarEl = screen.getByTestId(TEST_ID);

		fireEvent.mouseOver(sidebarEl);
		expect(sidebarEl).toHaveClass(EXPANDED_CLASS_NAME);

		fireEvent.mouseOut(sidebarEl);
		expect(sidebarEl).not.toHaveClass(EXPANDED_CLASS_NAME);
	});

	test('collapse on focus/blur', () => {
		componentRender(<TheSidebar />);
		const sidebarEl = screen.getByTestId(TEST_ID);

		fireEvent.focus(sidebarEl);
		expect(sidebarEl).toHaveClass(EXPANDED_CLASS_NAME);

		fireEvent.blur(sidebarEl);
		expect(sidebarEl).not.toHaveClass(EXPANDED_CLASS_NAME);
	});
});
