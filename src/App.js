import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsMobile } from './redux/slices/main/mainSlice';
import { selectTheme } from './redux/slices/theme/themeSlice';
import useWindowDimensions from "./Hooks/WindowDimentions";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import './App.scss';


import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from './config/theme/palette';
import { CssBaseline } from '@mui/material';
import MainLayout from './layouts/MainLayout';
import UnitContent from './pages/UnitContent';
import MainInfo from './pages/MainInfo';

const App = () => {
  const isDark = useSelector(selectTheme);
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsMobile(width <= 768));
  }, [width, dispatch]);

  return (

    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<><MainLayout /><Navigate to="/mainInfo" /></>}>
            <Route path="/mainInfo" element={<UnitContent />}>
              <Route path="/mainInfo" element={<MainInfo />} />
            </Route>
          </Route>
        </Routes>
      </Router>

    </ThemeProvider>
  );
}

export default App;
