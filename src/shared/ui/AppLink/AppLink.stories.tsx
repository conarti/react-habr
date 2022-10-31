import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink } from './AppLink';

export default {
	title: 'shared/AppLink',
	component: AppLink,
	args: {
		to: '/',
		children: 'Link',
	},
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Default = Template.bind({});
Default.args = {};
