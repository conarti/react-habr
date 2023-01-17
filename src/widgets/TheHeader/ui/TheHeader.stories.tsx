import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withStore } from 'shared/lib/storybook/withStore';
import { TheHeader } from './TheHeader';

export default {
	title: 'widgets/TheHeader',
	component: TheHeader,
	decorators: [withStore({})],
	parameters: {
		hasPageLayout: true,
	},
} as ComponentMeta<typeof TheHeader>;

const Template: ComponentStory<typeof TheHeader> = (args) => <TheHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
