import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink } from 'shared/ui/AppLink/ui/AppLink';

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
