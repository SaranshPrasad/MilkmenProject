import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const VendorSignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const addressRef = useRef('');
    const numberRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleVendorSignUp = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const address = addressRef.current.value;
        const number = numberRef.current.value;

        try {
            const response = await fetch('http://localhost:5000/vendor-signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, address, number }),
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('token', data.token);
                alert('Sign up successful!');
                navigate('/');
            } else {
                alert(data.message || 'Sign up failed!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Vendor Sign Up</h1>
                <form onSubmit={handleVendorSignUp} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter name"
                        ref={nameRef}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="email"
                        placeholder="Enter email"
                        ref={emailRef}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="text"
                        placeholder="Enter address"
                        ref={addressRef}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="text"
                        placeholder="Enter number"
                        ref={numberRef}
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
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account? <Link to="/vendor_login" className="text-indigo-600 hover:underline">Login Now</Link>
                </p>
            </div>
        </div>
    );
};

export default VendorSignUp;
