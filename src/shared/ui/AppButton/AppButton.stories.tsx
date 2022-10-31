import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppButton, AppButtonSize, ThemeButton } from './AppButton';

export default {
	title: 'shared/Button',
	component: AppButton,
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Text',
	theme: ThemeButton.PRIMARY,
};

export const Clear = Template.bind({});
Clear.args = {
	children: 'Text',
	theme: ThemeButton.CLEAR,
};

export const Small = Template.bind({});
Small.args = {
	children: 'Text',
	theme: ThemeButton.PRIMARY,
	size: AppButtonSize.SM,
};

export const Medium = Template.bind({});
Medium.args = {
	children: 'Text',
	theme: ThemeButton.PRIMARY,
	size: AppButtonSize.MD,
};

export const Large = Template.bind({});
Large.args = {
	children: 'Text',
	theme: ThemeButton.PRIMARY,
	size: AppButtonSize.LG,
};

export const Link = Template.bind({});
Link.args = {
	children: 'Text',
	to: '/',
};
