import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withStore } from 'shared/lib/storybook/withStore';
import MainPage from './MainPage';

export default {
	title: 'pages/MainPage',
	component: MainPage,
	parameters: {
		hasPageLayout: true,
	},
	decorators: [withStore({})],
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Default = Template.bind({});
