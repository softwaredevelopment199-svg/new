import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Toolbar, Typography, Box, Avatar, Menu, MenuItem, } from '@mui/material';
import { useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        logout();
        navigate('/login');
        handleMenuClose();
    };
    return (_jsx(AppBar, { position: "static", sx: { backgroundColor: '#FF1493' }, children: _jsxs(Toolbar, { children: [_jsx(Typography, { variant: "h6", sx: { flexGrow: 1, fontWeight: 'bold' }, children: "Easybox Logistics" }), user && (_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2 }, children: [_jsx(Avatar, { onClick: handleMenuOpen, sx: { cursor: 'pointer', bgcolor: '#C71585' }, children: user.firstName?.charAt(0) }), _jsxs(Menu, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: handleMenuClose, children: [_jsx(MenuItem, { children: user.email }), _jsx(MenuItem, { onClick: () => navigate('/settings'), children: "Settings" }), _jsx(MenuItem, { onClick: handleLogout, children: "Logout" })] })] }))] }) }));
}
