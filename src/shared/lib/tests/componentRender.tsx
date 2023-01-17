import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider, StateSchema } from 'app/providers/StoreProvider';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export interface RenderWithRouterOptions {
	route?: string;
	initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (component: ReactNode, options: RenderWithRouterOptions = {}) => {
	const {
		route = '/',
		initialState,
	} = options;

	return render(
		<StoreProvider initialState={initialState}>
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={i18nForTests}>
					{component}
				</I18nextProvider>
			</MemoryRouter>
		</StoreProvider>,
	);
};
