import  { useEffect, useState } from 'react';

const AdminDashboard = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalVendors, setTotalVendors] = useState(0);
  

    useEffect(() => {
        const fetchTotalUsers = async () => {
            try {
                const response = await fetch('http://localhost:5000/admin/total-users');
                const data = await response.json();
                setTotalUsers(data.totalUsers);
            } catch (error) {
                console.error('Error fetching total users:', error);
            }
        };

        const fetchTotalVendors = async () => {
            try {
                const response = await fetch('http://localhost:5000/admin/total-vendors');
                const data = await response.json();
                setTotalVendors(data.totalVendors);
            } catch (error) {
                console.error('Error fetching total vendors:', error);
            }
        };

        fetchTotalUsers();
        fetchTotalVendors();
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Total Users: {totalUsers}</p>
            <p>Total Vendors: {totalVendors}</p>
        </div>
    );
};

export default AdminDashboard;
