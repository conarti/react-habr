import { addDecorator } from '@storybook/react';
import { withTheme } from 'shared/config/storybook/withTheme';
import { withStyles } from 'shared/config/storybook/withStyles';
import { withRouter } from 'shared/config/storybook/withRouter';

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

addDecorator(withRouter);
addDecorator(withStyles);
addDecorator(withTheme);
