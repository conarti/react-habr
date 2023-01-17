import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageError } from './PageError';

export default {
	title: 'widgets/PageError',
	component: PageError,
	parameters: {
		hasPageLayout: true,
	},
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Default = Template.bind({});
Default.args = {};
