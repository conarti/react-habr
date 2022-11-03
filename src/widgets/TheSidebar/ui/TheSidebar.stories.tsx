import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TheSidebar } from 'widgets/TheSidebar';

export default {
	title: 'widgets/Sidebar',
	component: TheSidebar,
	parameters: {
		hasPageLayout: true,
	},
} as ComponentMeta<typeof TheSidebar>;

const Template: ComponentStory<typeof TheSidebar> = (args) => <TheSidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};
