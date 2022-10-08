import { Story, StoryContext } from '@storybook/react';

export const ThemeDecorator = (StoryComponent: Story, { globals, parameters }: StoryContext) => {
	const { theme } = globals;
	const { hasPageLayout } = parameters;

	return (
		<div className={`app ${theme} ${hasPageLayout ? 'is-page-story' : 'is-story'}`}>
			<StoryComponent />
		</div>
	);
};
