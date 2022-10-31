import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLoader } from './AppLoader';

export default {
	title: 'shared/AppLoader',
	component: AppLoader,
} as ComponentMeta<typeof AppLoader>;

const Template: ComponentStory<typeof AppLoader> = (args) => <AppLoader {...args} />;

export const Default = Template.bind({});
Default.args = {};
