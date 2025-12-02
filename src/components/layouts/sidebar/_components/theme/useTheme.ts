import { changeTheme } from 'src/app/slices/layoutSlice';
import { useAppDispatch, useTypedSelector } from 'src/app/store';
import { STORAGE_KEYS } from 'src/constants/storage';

export function useTheme() {
  const darkMode = useTypedSelector((state) => state.layout.darkMode);
  const dispatch = useAppDispatch();
  const changeThemeNavbar = () => {
    const theme = darkMode ? 'light' : 'dark';
    dispatch(changeTheme(theme));
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  };
  return {
    darkMode,
    changeThemeNavbar,
  };
}
