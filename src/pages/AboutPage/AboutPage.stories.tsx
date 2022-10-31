import { ComponentMeta, ComponentStory } from '@storybook/react';
import AboutPage from './AboutPage';

export default {
	title: 'pages/AboutPage',
	component: AboutPage,
	parameters: {
		hasPageLayout: true,
	},
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
