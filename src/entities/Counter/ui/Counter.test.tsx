import { fireEvent, screen } from '@testing-library/react';
import { Counter } from 'entities/Counter';
import { componentRender } from 'shared/lib/tests/componentRender';

const VALUE_TITLE_TEST_ID = 'value-title';
const INCREMENT_BTN_TEST_ID = 'increment-btn';
const DECREMENT_BTN_TEST_ID = 'decrement-btn';

describe('Counter ui', () => {
	test('should render', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 10,
				},
			},
		});
		expect(screen.getByTestId(VALUE_TITLE_TEST_ID)).toHaveTextContent('Counter value - 10');
	});

	test('increment', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 10,
				},
			},
		});
		fireEvent.click(screen.getByTestId(INCREMENT_BTN_TEST_ID));
		expect(screen.getByTestId(VALUE_TITLE_TEST_ID)).toHaveTextContent('Counter value - 11');
	});

	test('decrement', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 10,
				},
			},
		});
		fireEvent.click(screen.getByTestId(DECREMENT_BTN_TEST_ID));
		expect(screen.getByTestId(VALUE_TITLE_TEST_ID)).toHaveTextContent('Counter value - 9');
	});
});
