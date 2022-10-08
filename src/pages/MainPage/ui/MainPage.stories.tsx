import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainPage from './MainPage';

export default {
	title: 'pages/MainPage',
	component: MainPage,
	parameters: {
		hasPageLayout: true,
	},
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
