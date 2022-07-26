import { combineReducers } from '@reduxjs/toolkit';
import themeSlice from '../slices/theme/themeSlice';
import mainSlice from '../slices/main/mainSlice';

const rootReducer = combineReducers({
  theme: themeSlice,
  main: mainSlice,
});

export default rootReducer;
