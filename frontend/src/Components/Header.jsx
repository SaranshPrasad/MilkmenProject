import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlics";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user_id = useSelector((store) => store?.user?.user_id);
    const token = localStorage.getItem('token');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        dispatch(removeUser());
        navigate('/login');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 bg-gray-800 text-white shadow-md font-poppins z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-start">
                        <h1 className="text-2xl font-bold">HomeEase</h1>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <svg
                                className={`block h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                            <svg
                                className={`block h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`fixed inset-y-0 right-0 bg-gray-800 z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
                        style={{ width: '250px' }}
                    >
                        <div className="relative bg-gray-800 text-white min-h-screen">
                            <button
                                onClick={toggleMenu}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <nav className="flex flex-col items-center justify-center min-h-screen">
                                <Link to="/" className="text-white hover:bg-gray-700 block px-4 py-2 rounded-md text-lg font-medium" onClick={toggleMenu}>Home</Link>
                                <Link to="/about" className="text-white hover:bg-gray-700 block px-4 py-2 rounded-md text-lg font-medium" onClick={toggleMenu}>About Us</Link>
                                <Link to="/services" className="text-white hover:bg-gray-700 block px-4 py-2 rounded-md text-lg font-medium" onClick={toggleMenu}>Services</Link>
                                <Link to="/milkmen" className="text-white hover:bg-gray-700 block px-4 py-2 rounded-md text-lg font-medium" onClick={toggleMenu}>Milkmen</Link>
                                {!token && <Link to="/login" className="text-white hover:bg-gray-700 block px-4 py-2 rounded-md text-lg font-medium" onClick={toggleMenu}>Login</Link>}
                                {token && <button onClick={() => { handleSignOut(); toggleMenu(); }} className="text-white hover:bg-gray-700 block px-4 py-2 rounded-md text-lg font-medium">Sign Out</button>}
                                {!token && <Link to="/vendorsignup" className="text-white hover:bg-gray-700 block px-4 py-2 rounded-md text-lg font-medium" onClick={toggleMenu}>Vendor Sign Up</Link>}
                                {user_id === 1 && <Link to="/admin" className="text-white hover:bg-gray-700 block px-4 py-2 rounded-md text-lg font-medium" onClick={toggleMenu}>Admin Dashboard</Link>}
                                <Link to="/contact" className="text-white bg-blue-600 hover:bg-blue-700 block px-4 py-2 rounded-md text-lg font-medium" onClick={toggleMenu}>Contact</Link>
                            </nav>
                        </div>
                    </div>
                    <div className={`fixed inset-y-0 right-0 z-30 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-50' : 'opacity-0'} bg-black`}  onClick={toggleMenu}></div>
                    <div className="hidden sm:flex sm:items-center sm:space-x-4">
                        <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                        <Link to="/services" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                        <Link to="/milkmen" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Milkmen</Link>
                        {!token && <Link to="/login" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>}
                        {token && <button onClick={handleSignOut} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sign Out</button>}
                        {!token && <Link to="/vendorsignup" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Vendor Sign Up</Link>}
                        {user_id === 1 && <Link to="/admin" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Admin Dashboard</Link>}
                        <Link to="/contact" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">Contact</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
