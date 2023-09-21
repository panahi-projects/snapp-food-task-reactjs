import { createSlice } from '@reduxjs/toolkit';

type TTheme = 'light-theme' | 'dark-theme';
interface ITheme {
  theme: TTheme;
}

const initialState: ITheme = {
  theme: 'light-theme'
};

const themeHandler = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    }
  }
});

export const { toggleTheme } = themeHandler.actions;
export default themeHandler.reducer;
