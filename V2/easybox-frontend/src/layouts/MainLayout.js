import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header';
import Sidebar from '@/components/common/Sidebar';
const DRAWER_WIDTH = 260;
export default function MainLayout() {
    return (_jsxs(Box, { sx: { display: 'flex', minHeight: '100vh' }, children: [_jsx(Header, {}), _jsx(Sidebar, {}), _jsx(Box, { component: "main", sx: {
                    flexGrow: 1,
                    p: 3,
                    marginTop: '64px',
                    backgroundColor: '#f5f5f5',
                }, children: _jsx(Outlet, {}) })] }));
}
