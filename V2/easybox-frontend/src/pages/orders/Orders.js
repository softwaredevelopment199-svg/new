import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Button, Typography, CircularProgress, } from '@mui/material';
const statusColors = {
    PENDING: 'warning',
    ASSIGNED: 'primary',
    PICKED_UP: 'primary',
    IN_TRANSIT: 'secondary',
    ARRIVED: 'info',
    DELIVERED: 'success',
    CANCELLED: 'error',
};
const mockOrders = [
    {
        id: '1',
        orderNumber: 'ORD-001',
        recipientName: 'John Kimani',
        deliveryAddress: 'Westlands, Nairobi',
        totalAmount: 1500,
        status: 'PENDING',
    },
    {
        id: '2',
        orderNumber: 'ORD-002',
        recipientName: 'Jane Mwangi',
        deliveryAddress: 'Kilimani, Nairobi',
        totalAmount: 2200,
        status: 'DELIVERED',
    },
];
export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                // Mock data
                setOrders(mockOrders);
            }
            catch (err) {
                console.error('Failed to fetch orders:', err);
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchOrders();
    }, []);
    if (isLoading) {
        return _jsx(CircularProgress, {});
    }
    return (_jsxs(Box, { children: [_jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', mb: 3 }, children: [_jsx(Typography, { variant: "h4", sx: { fontWeight: 'bold' }, children: "Orders" }), _jsx(Button, { variant: "contained", sx: { backgroundColor: '#FF1493' }, children: "Create Order" })] }), _jsx(TableContainer, { component: Paper, children: _jsxs(Table, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { sx: { backgroundColor: '#f5f5f5' }, children: [_jsx(TableCell, { children: "Order ID" }), _jsx(TableCell, { children: "Customer" }), _jsx(TableCell, { children: "Delivery Address" }), _jsx(TableCell, { children: "Amount (KSh)" }), _jsx(TableCell, { children: "Status" }), _jsx(TableCell, { children: "Actions" })] }) }), _jsx(TableBody, { children: orders.map((order) => (_jsxs(TableRow, { children: [_jsx(TableCell, { sx: { fontWeight: 'bold' }, children: order.orderNumber }), _jsx(TableCell, { children: order.recipientName }), _jsx(TableCell, { children: order.deliveryAddress }), _jsx(TableCell, { children: order.totalAmount.toLocaleString() }), _jsx(TableCell, { children: _jsx(Chip, { label: order.status, color: statusColors[order.status] || 'default', size: "small" }) }), _jsx(TableCell, { children: _jsx(Button, { size: "small", variant: "outlined", children: "View" }) })] }, order.id))) })] }) })] }));
}
