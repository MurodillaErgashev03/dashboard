import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from 'src/constants/storage';
import {
  IThemeColor,
  themeColors,
  themeFontSize,
  themeFontWeight,
} from 'src/constants/theme';
// import { isSidebarFixed } from 'src/static/constants';

export interface ILayoutState {
  collapsed?: boolean;
  darkMode: boolean;
  colors: IThemeColor;
  screenMode?: 'enter' | 'exit';
}

export const isDarkTheme = localStorage.getItem(STORAGE_KEYS.THEME) === 'dark';

const initialState: ILayoutState = {
  //   collapsed: isSidebarFixed ? true : false,
  darkMode: isDarkTheme,
  colors: isDarkTheme ? themeColors.dark : themeColors.light,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    changeCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
    changeScreenMode: (
      state,
      action: PayloadAction<ILayoutState['screenMode']>
    ) => {
      state.screenMode = action.payload;
    },
    changeTheme: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload === 'light') {
        state.darkMode = false;
      } else if (action.payload === 'dark') {
        state.darkMode = true;
      } else {
        state.darkMode = !state.darkMode;
      }

      let cssColors: IThemeColor;

      if (state.darkMode) {
        localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
        state.colors = themeColors.dark;
        cssColors = themeColors.dark;
      } else {
        localStorage.setItem(STORAGE_KEYS.THEME, 'light');
        state.colors = themeColors.light;
        cssColors = themeColors.light;
      }

      for (const key in cssColors) {
        document.documentElement.style.setProperty(
          '--' + key,
          cssColors[key as keyof IThemeColor]
        );
      }

      for (const key in themeFontSize) {
        document.documentElement.style.setProperty(
          '--' + key,
          `${themeFontSize[key as keyof typeof themeFontSize]}px`
        );
      }

      for (const key in themeFontWeight) {
        document.documentElement.style.setProperty(
          '--' + key,
          `${themeFontWeight[key as keyof typeof themeFontWeight]}`
        );
      }
    },
    setTheme: (state) => {
      let cssColors: any;

      if (state.darkMode) {
        cssColors = themeColors.dark;
      } else {
        cssColors = themeColors.light;
      }

      for (const key in cssColors) {
        document.documentElement.style.setProperty('--' + key, cssColors[key]);
      }
    },
  },
});

export const { changeCollapsed } = layoutSlice.actions;
export const { changeScreenMode } = layoutSlice.actions;
export const { changeTheme } = layoutSlice.actions;
export const { setTheme } = layoutSlice.actions;

export default layoutSlice.reducer;
