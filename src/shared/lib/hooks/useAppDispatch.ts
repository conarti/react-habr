import { useDispatch } from 'react-redux';
import { AppDispatch } from 'shared/config/types';

export const useAppDispatch: () => AppDispatch = useDispatch;
