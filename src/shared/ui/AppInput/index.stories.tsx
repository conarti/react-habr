import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppInput } from './index';

export default {
	title: 'shared/AppInput',
	component: AppInput,
	args: {
		type: 'text',
	},
} as ComponentMeta<typeof AppInput>;

const Template: ComponentStory<typeof AppInput> = (args) => <AppInput {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
	label: 'Input label',
};
