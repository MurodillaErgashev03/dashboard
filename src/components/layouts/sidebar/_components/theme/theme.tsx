import { Moon, Sun1 } from 'iconsax-react';
import { useTypedSelector } from 'src/app/store';
import { useTheme } from './useTheme';
import { colors } from 'src/constants/theme';

export function Theme() {
  const { changeThemeNavbar, darkMode } = useTheme();
  return (
    <div>
      {darkMode ? (
        <Sun1 color={colors.white} onClick={changeThemeNavbar} />
      ) : (
        <Moon onClick={changeThemeNavbar} />
      )}
    </div>
  );
}
