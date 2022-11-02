import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withStore } from 'shared/lib/storybook/withStore';
import { Navbar } from 'widgets/Navbar';

export default {
	title: 'widgets/Navbar',
	component: Navbar,
	decorators: [withStore({})],
	parameters: {
		hasPageLayout: true,
	},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
