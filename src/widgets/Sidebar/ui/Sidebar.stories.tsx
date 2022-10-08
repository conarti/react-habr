import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Sidebar } from 'widgets/Sidebar';

export default {
	title: 'widgets/Sidebar',
	component: Sidebar,
	parameters: {
		hasPageLayout: true,
	},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};
