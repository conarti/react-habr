import { fireEvent, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { AppModal } from './AppModal';

const TITLE = 'Modal title';
const CONTENT = 'Modal content';
const TEST_ID = 'app-modal';
const CONTENT_TEST_ID = 'app-modal-content';
const CLOSE_BTN_TEST_ID = 'app-modal-close';

let vdom: ReactElement;
let onRequestClose: () => void;

describe('AppButton', () => {
	beforeEach(() => {
		onRequestClose = jest.fn();
		vdom = (
			<AppModal
				title={TITLE}
				isOpened
				onRequestClose={onRequestClose}
			>
				{CONTENT}
			</AppModal>
		);
	});

	test('should render', () => {
		const { getByTestId } = render(vdom);
		expect(getByTestId(TEST_ID)).toBeInTheDocument();
	});

	test('should close after click close btn', () => {
		const { getByTestId } = render(vdom);
		fireEvent.click(getByTestId(CLOSE_BTN_TEST_ID));
		expect(onRequestClose).toBeCalledTimes(1);
	});

	test('should close after press esc', () => {
		render(vdom);
		fireEvent.keyDown(window, {
			key: 'Escape',
			code: 'Escape',
			keyCode: 27,
			charCode: 27,
		});
		expect(onRequestClose).toBeCalledTimes(1);
	});

	test('should close after click at overlay', () => {
		const { getByTestId } = render(vdom);
		fireEvent.click(getByTestId(TEST_ID));
		expect(onRequestClose).toBeCalledTimes(1);
	});

	test('should not close after click at content', () => {
		const { getByTestId } = render(vdom);
		fireEvent.click(getByTestId(CONTENT_TEST_ID));
		expect(onRequestClose).toBeCalledTimes(0);
	});

	test('should render title and content', () => {
		const { getByText } = render(vdom);
		expect(getByText(TITLE)).toBeInTheDocument();
		expect(getByText(CONTENT)).toBeInTheDocument();
	});
});
