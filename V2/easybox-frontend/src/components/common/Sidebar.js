import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, } from '@mui/material';
import { Dashboard as DashboardIcon, LocalShipping as OrdersIcon, Person as RidersIcon, Store as MerchantsIcon, Settings as SettingsIcon, } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
const DRAWER_WIDTH = 260;
const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: DashboardIcon },
    { label: 'Orders', path: '/orders', icon: OrdersIcon },
    { label: 'Riders', path: '/riders', icon: RidersIcon },
    { label: 'Merchants', path: '/merchants', icon: MerchantsIcon },
    { label: 'Settings', path: '/settings', icon: SettingsIcon },
];
export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    return (_jsx(Drawer, { variant: "permanent", sx: {
            width: DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: DRAWER_WIDTH,
                boxSizing: 'border-box',
                marginTop: '64px',
            },
        }, children: _jsx(Box, { sx: { overflow: 'auto' }, children: _jsx(List, { children: menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (_jsx(ListItem, { disablePadding: true, children: _jsxs(ListItemButton, { onClick: () => navigate(item.path), selected: isActive, sx: {
                                backgroundColor: isActive ? '#FFE5F0' : 'transparent',
                                '&.Mui-selected': {
                                    backgroundColor: '#FFE5F0',
                                    borderLeft: '4px solid #FF1493',
                                },
                            }, children: [_jsx(ListItemIcon, { sx: { color: isActive ? '#FF1493' : 'inherit' }, children: _jsx(Icon, {}) }), _jsx(ListItemText, { primary: item.label })] }) }, item.path));
                }) }) }) }));
}
