import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  isMobile: false,
  isFilterShow: false
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    toggleMenu: state => {
      state.isMenuOpen = !state.isMenuOpen;
      state.isFilterShow = false;
    },
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
    setIsFilterShow: (state, action) => {
      state.isFilterShow = action.payload;
    }
  }
});

export const { toggleMenu, setIsMobile, setIsFilterShow } = mainSlice.actions;

export const selectMenu = (state) => state.main.isMenuOpen;
export const selectMobile = (state) => state.main.isMobile;
export const selectFilterShow = (state) => state.main.isFilterShow;

export default mainSlice.reducer;