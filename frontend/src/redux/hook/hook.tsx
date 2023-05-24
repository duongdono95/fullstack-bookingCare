import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useAppLoggedIn = () => useSelector((state: RootState) => state.isLoggedIn);
