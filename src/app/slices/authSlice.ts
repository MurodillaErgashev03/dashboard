import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOKEN, token } from 'src/constants/storage';

export interface IAuthState {
  token?: string;
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  token: token || '',
  isAuthenticated: token ? true : false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const tokenValue = action.payload;

      state.token = tokenValue;
      state.isAuthenticated = true;
      localStorage.setItem(TOKEN, tokenValue);
    },

    logout: (state) => {
      state.token = '';
      state.isAuthenticated = false;
      localStorage.removeItem(TOKEN);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
