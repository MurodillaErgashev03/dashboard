import { useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import { changeTheme } from 'src/app/slices/layoutSlice';
import { useAppDispatch, useTypedSelector } from 'src/app/store';

import MainLayout from 'src/components/layouts/main';
import { STORAGE_KEYS } from 'src/constants/storage';

import { Custom404Page, HelpPage, HomePage } from 'src/pages';
import LoginPage from 'src/pages/login/login';

function RouterProvider() {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    const theme = localStorage.getItem(STORAGE_KEYS.THEME) ?? 'light';
    dispatch(changeTheme(theme));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/help" element={<HelpPage />} />

        {isAuthenticated ? (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        ) : (
          <Route path="/login" element={<LoginPage />} />
        )}

        {!isAuthenticated && (
          <Route path="/" element={<Navigate to="/login" replace />} />
        )}

        <Route path="/auth" element={<MainLayout />}>
          <Route path="signup" element={<Custom404Page />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<Custom404Page />} />
      </Routes>
    </Router>
  );
}

export default RouterProvider;
