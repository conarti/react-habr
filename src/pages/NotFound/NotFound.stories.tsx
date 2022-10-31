import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotFound } from './NotFound';

export default {
	title: 'pages/NotFound',
	component: NotFound,
	parameters: {
		hasPageLayout: true,
	},
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args) => <NotFound {...args} />;

export const Default = Template.bind({});
Default.args = {};
