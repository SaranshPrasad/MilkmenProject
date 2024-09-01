import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlics";
import Cookies from 'js-cookie';

const Login = () => {
    const user_id = useSelector((store) => store?.user?.user_id);
    const dispatch = useDispatch();
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        try {
            const response = await axios.post('http://localhost:5000/login', { email, password: pass });
            localStorage.setItem('token', response.data.token);
            console.log('Login successful:', response.data);
            const { username, user_id } = response?.data?.user;
            Cookies.set('user_id', user_id);
            dispatch(addUser({
                username: username,
                user_id: user_id,
            }));
            if (user_id === 1) {
                navigate('/admin');
            } else {
                navigate('/')
            }
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            ref={emailRef}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Enter Email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            ref={passRef}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                    <p className="text-sm text-gray-600 text-center mt-4">
                        Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up now</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
