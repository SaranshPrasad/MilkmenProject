import axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addVendor } from "../utils/vendorSlice";
import Cookies from 'js-cookie';

const VendorLogin = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleVendorLogin = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
            const response = await axios.post('http://localhost:5000/vendorlogin', { email, password });
            localStorage.setItem('token', response.data.token);
            Cookies.set('token', response.data.token);
            Cookies.set('vendor_id', response.data.v_id);
            console.log('Login successful:', response.data);

            const { v_name, v_id } = response.data;
            dispatch(addVendor({
                username: v_name,
                user_id: v_id,
            }));

            navigate('/vendor/dashboard');
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="font-bold text-center text-4xl text-gray-800 mb-6">Vendor Login</h1>
                <form onSubmit={handleVendorLogin} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Enter email"
                        ref={emailRef}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="password"
                        placeholder="Enter password"
                        ref={passwordRef}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        type="submit"
                        className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VendorLogin;
