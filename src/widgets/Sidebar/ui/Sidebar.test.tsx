import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

const COLLAPSED_CLASS_NAME = 'collapsed';
const TEST_ID = 'sidebar';

describe('Sidebar', () => {
	test('test', () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
	});

	test('collapse on mouse over/out', () => {
		renderWithTranslation(<Sidebar />);
		const sidebarEl = screen.getByTestId(TEST_ID);

		fireEvent.mouseOver(sidebarEl);
		expect(sidebarEl).not.toHaveClass(COLLAPSED_CLASS_NAME);

		fireEvent.mouseOut(sidebarEl);
		expect(sidebarEl).toHaveClass(COLLAPSED_CLASS_NAME);
	});

	test('collapse on focus/blur', () => {
		renderWithTranslation(<Sidebar />);
		const sidebarEl = screen.getByTestId(TEST_ID);

		fireEvent.focus(sidebarEl);
		expect(sidebarEl).not.toHaveClass(COLLAPSED_CLASS_NAME);

		fireEvent.blur(sidebarEl);
		expect(sidebarEl).toHaveClass(COLLAPSED_CLASS_NAME);
	});
});
