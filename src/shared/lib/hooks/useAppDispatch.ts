// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'shared/config/types';

export const useAppDispatch: () => AppDispatch = useDispatch;
