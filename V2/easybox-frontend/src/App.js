import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/styles/theme';
import Login from '@/pages/Login';
import Dashboard from '@/pages/dashboard/Dashboard';
import Orders from '@/pages/orders/Orders';
import Riders from '@/pages/riders/Riders';
import Merchants from '@/pages/merchants/Merchants';
import Settings from '@/pages/settings/Settings';
import ProtectedRoute from '@/components/common/ProtectedRoute';
import MainLayout from '@/layouts/MainLayout';
function App() {
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsxs(Route, { path: "/", element: _jsx(ProtectedRoute, { children: _jsx(MainLayout, {}) }), children: [_jsx(Route, { index: true, element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "orders", element: _jsx(Orders, {}) }), _jsx(Route, { path: "riders", element: _jsx(Riders, {}) }), _jsx(Route, { path: "merchants", element: _jsx(Merchants, {}) }), _jsx(Route, { path: "settings", element: _jsx(Settings, {}) })] }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/dashboard", replace: true }) })] }) })] }));
}
export default App;
