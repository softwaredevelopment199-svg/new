import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Typography, Alert, CircularProgress, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { apiClient } from '@/services/api';
import { API_ENDPOINTS } from '@/utils/constants';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuthStore();
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            const response = await apiClient.post(API_ENDPOINTS.LOGIN, { email, password });
            login(response.user, response.token);
            navigate('/dashboard');
        }
        catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsx(Box, { sx: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f5f5f5',
        }, children: _jsx(Card, { sx: { width: 400 }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h4", sx: { mb: 3, textAlign: 'center', color: '#FF1493' }, children: "Easybox Admin" }), error && _jsx(Alert, { severity: "error", sx: { mb: 2 }, children: error }), _jsxs("form", { onSubmit: handleLogin, children: [_jsx(TextField, { fullWidth: true, label: "Email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), margin: "normal", required: true }), _jsx(TextField, { fullWidth: true, label: "Password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), margin: "normal", required: true }), _jsx(Button, { fullWidth: true, variant: "contained", sx: { mt: 3, backgroundColor: '#FF1493' }, disabled: isLoading, type: "submit", children: isLoading ? _jsx(CircularProgress, { size: 24 }) : 'Login' })] }), _jsx(Typography, { variant: "body2", sx: { mt: 2, textAlign: 'center', color: '#666' }, children: "Demo: Use your backend credentials" })] }) }) }));
}
