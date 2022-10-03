import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppButton, ThemeButton } from 'shared/ui/AppButton';

export default {
	title: 'shared/Button',
	component: AppButton,
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Outline = Template.bind({});
Outline.args = {
	children: 'Text',
	theme: ThemeButton.OUTLINE,
};

export const Clear = Template.bind({});
Clear.args = {
	children: 'Text',
	theme: ThemeButton.CLEAR,
};
