import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

export default {
	title: 'shared/ThemeSwitcher',
	component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Default = Template.bind({});
Default.args = {};
