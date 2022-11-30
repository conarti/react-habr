import { ComponentMeta, ComponentStory } from '@storybook/react';
import ViewerProfilePage from './ViewerProfilePage';

export default {
	title: 'pages/ViewerProfilePage',
	component: ViewerProfilePage,
	parameters: {
		hasPageLayout: true,
	},
} as ComponentMeta<typeof ViewerProfilePage>;

const Template: ComponentStory<typeof ViewerProfilePage> = () => <ViewerProfilePage />;

export const Default = Template.bind({});
