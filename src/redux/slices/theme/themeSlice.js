import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: true
};

export const toggleThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark
    }
  }
});

export const { toggleTheme } = toggleThemeSlice.actions;

export const selectTheme = (state) => state.theme.isDark

export default toggleThemeSlice.reducer;