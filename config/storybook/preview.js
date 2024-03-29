import { addDecorator } from '@storybook/react';
import { withTheme } from 'shared/lib/storybook/withTheme';
import { withStyles } from 'shared/lib/storybook/withStyles';
import { withRouter } from 'shared/lib/storybook/withRouter';
import { withTranslations } from 'shared/lib/storybook/withTranslations';

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
addDecorator(withTranslations);
