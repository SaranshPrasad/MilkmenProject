import { useEffect, useState } from 'react';
import { FaUsers, FaStore, FaToggleOn, FaToggleOff } from 'react-icons/fa';

const AdminDashboard = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalVendors, setTotalVendors] = useState(0);
    const [showUsers, setShowUsers] = useState(true);
    const [users, setUsers] = useState(null);
    const [vendors, setVendors] = useState(null);

    useEffect(() => {
        const fetchTotalUsers = async () => {
            try {
                const response = await fetch('http://localhost:5000/admin/total-users');
                const data = await response.json();
                setTotalUsers(data.totalUsers);
                  // Assuming the API returns a list of users
            } catch (error) {
                console.error('Error fetching total users:', error);
            }
        };

        const fetchTotalVendors = async () => {
            try {
                const response = await fetch('http://localhost:5000/admin/total-vendors');
                const data = await response.json();
                setTotalVendors(data.totalVendors);
                  // Assuming the API returns a list of vendors
            } catch (error) {
                console.error('Error fetching total vendors:', error);
            }
        };
        const fetchUsers = async () => {
            try{
                const response = await fetch('http://localhost:5000/users');
                const data = await response.json();
                console.log(data);
                setUsers(data)
            }catch (err){
                console.log(err);
            }
        }
        const fetchVendors = async () => {
            try{
                const response = await fetch('http://localhost:5000/vendors');
                const data = await response.json();
                console.log(data);
                setVendors(data)
            }catch (err){
                console.log(err);
            }
        }
        fetchVendors();
        fetchUsers();
        fetchTotalUsers();
        fetchTotalVendors();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
                
                <div className="flex justify-around mb-6">
                    <div className="text-center">
                        <FaUsers className="text-blue-500 text-4xl mx-auto" />
                        <p className="text-xl font-semibold">Total Users</p>
                        <p className="text-lg text-gray-700">{totalUsers}</p>
                    </div>
                    <div className="text-center">
                        <FaStore className="text-green-500 text-4xl mx-auto" />
                        <p className="text-xl font-semibold">Total Vendors</p>
                        <p className="text-lg text-gray-700">{totalVendors}</p>
                    </div>
                </div>

                <div className="flex justify-center items-center mb-6">
                    <button
                        onClick={() => setShowUsers(!showUsers)}
                        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-blue-600 transition"
                    >
                        {showUsers ? (
                            <>
                                <FaToggleOn className="mr-2" />
                                Show Vendors
                            </>
                        ) : (
                            <>
                                <FaToggleOff className="mr-2" />
                                Show Users
                            </>
                        )}
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow-lg">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">ID</th>
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Role</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {showUsers
                                ? users?.map((user) => (
            
                                    <tr key={user.user_id} className="border-b border-gray-200 hover:bg-gray-100">
                                        
                                        <td className="py-3 px-6 text-left whitespace-nowrap">{user.user_id}</td>
                                        <td className="py-3 px-6 text-left">{user.username}</td>
                                        <td className="py-3 px-6 text-left">{user.email}</td>
                                        <td className="py-3 px-6 text-left">{user.user_id === 1 ? "Admin" : "User"}</td>

                                    </tr>
                                    
                                ))
                                : vendors.map((vendor) => (
                                    <tr key={vendor.id} className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">{vendor.v_id}</td>
                                        <td className="py-3 px-6 text-left">{vendor.v_name}</td>
                                        <td className="py-3 px-6 text-left">{vendor.v_email}</td>
                                        <td className="py-3 px-6 text-left">Vendor</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
