import { addDecorator } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	layout: 'fullscreen',
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'light',
		toolbar: {
			icon: 'circlehollow',
			items: ['light', 'dark'],
			showName: true,
			dynamicTitle: true,
		},
	},
};

addDecorator(RouterDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator);
