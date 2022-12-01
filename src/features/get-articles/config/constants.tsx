import GridIcon from 'shared/assets/icons/grid.svg';
import ListIcon from 'shared/assets/icons/list-ul-alt.svg';
import { SelectViewButton } from './types';

export const selectViewButtons: SelectViewButton[] = [
	{
		type: 'grid',
		icon: <GridIcon />,
	},
	{
		type: 'list',
		icon: <ListIcon />,
	},
];

export const VIEW_TYPE_LOCAL_STORAGE_KEY = 'view-type';
