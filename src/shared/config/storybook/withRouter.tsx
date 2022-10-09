import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (StoryComponent: Story) => (
	<BrowserRouter>
		<StoryComponent />
	</BrowserRouter>
);
