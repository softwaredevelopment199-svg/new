import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, CircularProgress, Alert, Grid } from '@mui/material';
import { LocalShipping, Person, TrendingUp } from '@mui/icons-material';
function KPICard({ icon, label, value, unit }) {
    return (_jsx(Card, { children: _jsx(CardContent, { children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2 }, children: [_jsx(Box, { sx: { color: '#FF1493' }, children: icon }), _jsxs(Box, { children: [_jsx(Typography, { color: "textSecondary", gutterBottom: true, children: label }), _jsxs(Typography, { variant: "h5", sx: { fontWeight: 'bold' }, children: [value, " ", unit] })] })] }) }) }));
}
export default function Dashboard() {
    const [kpis, setKpis] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                // Mock data - replace with actual API call
                setKpis({
                    ordersToday: 1250,
                    deliveredToday: 1030,
                    activeRiders: 76,
                    revenue: 625400,
                });
            }
            catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load dashboard');
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchDashboard();
    }, []);
    if (isLoading) {
        return (_jsx(Box, { sx: { display: 'flex', justifyContent: 'center', p: 4 }, children: _jsx(CircularProgress, {}) }));
    }
    return (_jsxs(Box, { children: [_jsx(Typography, { variant: "h4", sx: { mb: 3, fontWeight: 'bold' }, children: "Dashboard" }), error && _jsx(Alert, { severity: "error", sx: { mb: 2 }, children: error }), kpis && (_jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { xs: 12, sm: 6, md: 3, children: _jsx(KPICard, { icon: _jsx(LocalShipping, { sx: { fontSize: 40 } }), label: "Orders Today", value: kpis.ordersToday }) }), _jsx(Grid, { xs: 12, sm: 6, md: 3, children: _jsx(KPICard, { icon: _jsx(LocalShipping, { sx: { fontSize: 40 } }), label: "Delivered Today", value: kpis.deliveredToday }) }), _jsx(Grid, { xs: 12, sm: 6, md: 3, children: _jsx(KPICard, { icon: _jsx(Person, { sx: { fontSize: 40 } }), label: "Active Riders", value: kpis.activeRiders }) }), _jsx(Grid, { xs: 12, sm: 6, md: 3, children: _jsx(KPICard, { icon: _jsx(TrendingUp, { sx: { fontSize: 40 } }), label: "Revenue", value: kpis.revenue, unit: "KSh" }) })] }))] }));
}
