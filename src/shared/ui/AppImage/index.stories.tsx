import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppImage } from './index';

export default {
	title: 'shared/AppImage',
	component: AppImage,
	args: {},
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Default = Template.bind({});
Default.args = {};
