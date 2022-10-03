import { addDecorator } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

addDecorator(RouterDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
