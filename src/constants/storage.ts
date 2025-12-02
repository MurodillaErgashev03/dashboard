export const TOKEN = 'TOKEN';
export const PROFILE = 'PROFILE';
export const LANGUAGE = 'LANGUAGE';
export const THEME = 'COLOR';

export const STORAGE_KEYS = {
  TOKEN,
  PROFILE,
  LANGUAGE,
  THEME,
};

export const token = localStorage.getItem(TOKEN);
export const profile = localStorage.getItem(PROFILE);
export const language = localStorage.getItem(LANGUAGE);
export const theme = localStorage.getItem(THEME);
