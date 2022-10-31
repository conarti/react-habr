import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppModal } from './AppModal';

export default {
	title: 'shared/AppModal',
	component: AppModal,
	args: {
		title: 'Modal',
		children: 'Modal content',
		isOpened: true,
	},
} as ComponentMeta<typeof AppModal>;

const Template: ComponentStory<typeof AppModal> = (args) => <AppModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
