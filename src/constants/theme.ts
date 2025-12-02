export const themeFontSize = {
  fontSizeTitle1: 60,
  fontSizeTitle2: 48,
  fontSizeTitle3: 36,
  fontSizeTitle4: 24,
  fontSizeTitle5: 20,
  fontSizeTitle6: 18,
  fontSizeTitle7: 16,
  fontSizeTitle8: 14,
  fontSizeTitle9: 12,
};

export const themeFontWeight = {
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemibold: 600,
  fontWeightBold: 700,
  fontWeightExtrabold: 800,
  fontWeightBlack: 900,
};

export const themeColors: { light: IThemeColor; dark: IThemeColor } = {
  light: {
    background: '#F5F5F5',
    background2: '#fff',
    container2: '#F5F5F5',
    colorText: '#000',
    stroke_dark: '#D9D9D9',
    inputColor: '#192033',
    colorPrimaryText: '#914bf1',
    primary: '#914bf1',
    primaryLight: '#F0E5FC',
    colorError: '#F5222D',
    container3: '#FFFFFF',
    colorDelete: '#fff',
    colorErrorBg: '#FFF1F0',
    loginBg: '#F3F3F5',
    colorPlaceholder: '#B8B8B8',
    loginBgSecondary: '#fff',
    // borderColor: '#cdd7e1',

    borderColor: '#32383e',
  },

  dark: {
    background: '#111828',
    background2: '#000',
    colorText: '#fff',
    container2: '#192033',
    stroke_dark: '#353C4C',
    inputColor: '#192033',
    primary: '#914bf1',
    colorPrimaryText: '#fff',
    primaryLight: '#192033',
    colorError: '#F5222D',
    container3: '#282F42',
    colorDelete: '#2A1215',
    colorErrorBg: '#2A1215',
    loginBg: '#0D111C',
    colorPlaceholder: '#B8B8B8',
    loginBgSecondary: '#111828',
    borderColor: '#cdd7e1',
  },
};
export interface IThemeColor {
  background: string;
  background2: string;
  container2: string;
  stroke_dark: string;
  inputColor: string;
  primary: string;
  colorText: string;
  colorPrimaryText: string;
  primaryLight: string;
  colorError: string;
  container3: string;
  colorDelete: string;
  colorErrorBg: string;
  loginBg: string;
  colorPlaceholder: string;
  loginBgSecondary: string;
  borderColor: string;
}

export const colors = {
  primary: '#914BF1',
  primaryLight: '#0c57a6',
  textPrimary: '#131d2d',
  gray: '#eef2f8',
  gray2: '#f4f7fb',
  gray3: '#e5e9ee',
  gray4: '#c3c9d2',
  gray5: '#9fa7b3',
  gray6: '#565b65',
  sliderColor: '#7384a0',
  // inputColor: '#272829',
  red: '#d62020',
  blue: '#1c5bd5',
  black: '#000',
  white: '#ffffff',
  info: '#0445b1',
  warning: '#997f21',
  success: '#21994a',
  danger: '#992121',
  colorError: '#F5222D',
  colorSuccess: '#52C41A',
  colorErrorBg: '#FFF1F0',
  colorSuccessBg: '#F6FFED',
};

export const shadows = {
  card: '0px 10px 20px 0px rgba(0, 0, 0, 0.06)',
};

export const flexStyles = {
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexWrap: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  flexRowCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  flexColumnCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexRowSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flexRowSpaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  flexRowSpaceEvenly: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  flexColumnSpaceBetween: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  flexColumnSpaceAround: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  flexColumnSpaceEvenly: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  flexRowCenterSpaceBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexColumnCenterSpaceBetween: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexColumnCenterSpaceAround: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flexColumnCenterSpaceEvenly: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  flexRowCenterSpaceAround: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flexRowCenterSpaceEvenly: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  flexRowCenterWrap: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  flexColumnCenterWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  flexRowCenterSpaceBetweenWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  flexColumnCenterSpaceBetweenWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  flexColumnCenterSpaceAroundWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
};

export type MarginTypes = {
  m?: React.CSSProperties['margin'];
  mt?: React.CSSProperties['marginTop'];
  mb?: React.CSSProperties['marginBottom'];
  ml?: React.CSSProperties['marginLeft'];
  mr?: React.CSSProperties['marginRight'];
};
