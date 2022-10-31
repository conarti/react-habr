import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LangSwitcher } from 'shared/ui/LangSwitcher/index';

export default {
	title: 'shared/LangSwitcher',
	component: LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const Default = Template.bind({});
Default.args = {};
