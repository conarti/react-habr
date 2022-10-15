import { Story, StoryContext } from '@storybook/react';
import { setStylesForTheme } from 'app/providers/ThemeProvider';

export const withTheme = (StoryComponent: Story, { globals, parameters }: StoryContext) => {
	const { theme } = globals;
	const { hasPageLayout } = parameters;

	setStylesForTheme(theme);

	return (
		<div className={`app ${hasPageLayout ? 'is-page-story' : 'is-story'}`}>
			<StoryComponent />
		</div>
	);
};
