import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'shared/config/types';

export const withStore = (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) => (StoryComponent: Story) => (
	<StoreProvider
		initialState={state}
		asyncReducers={asyncReducers}
	>
		<StoryComponent />
	</StoreProvider>
);
