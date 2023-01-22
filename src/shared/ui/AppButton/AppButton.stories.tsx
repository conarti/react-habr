import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppButton, AppButtonSize } from './AppButton';

export default {
	title: 'shared/Button',
	component: AppButton,
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Text',
	theme: 'primary',
};

export const Clear = Template.bind({});
Clear.args = {
	children: 'Text',
	theme: 'clear',
};

export const Small = Template.bind({});
Small.args = {
	children: 'Text',
	theme: 'primary',
	size: AppButtonSize.SM,
};

export const Medium = Template.bind({});
Medium.args = {
	children: 'Text',
	theme: 'primary',
	size: AppButtonSize.MD,
};

export const Large = Template.bind({});
Large.args = {
	children: 'Text',
	theme: 'primary',
	size: AppButtonSize.LG,
};

export const Link = Template.bind({});
Link.args = {
	children: 'Text',
	to: '/',
};
