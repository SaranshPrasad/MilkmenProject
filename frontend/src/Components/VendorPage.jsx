import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VendorPage = () => {
    const { vendorId } = useParams();
    const [vendor, setVendor] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVendorDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/vendors/${vendorId}`);
                const vendorData = await response.json();
                setVendor(vendorData);

                const productResponse = await fetch(`http://localhost:5000/vendors/${vendorId}/products`);
                const productData = await productResponse.json();
                setProducts(Array.isArray(productData) ? productData : []);
            } catch (error) {
                console.error('Error fetching vendor details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchVendorDetails();
    }, [vendorId]);

    if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Vendor Hero Section */}
            <div 
                className="relative h-64 w-full bg-cover bg-center rounded-lg shadow-md" 
            >
                <div className="absolute inset-0  bg-gradient-to-r from-red-200 to-orange-200 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                        {vendor.v_name}
                    </h1>
                </div>
            </div>

            {/* Vendor Details */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <div className="text-lg space-y-2">
                    <p>
                        Email: <a href={`mailto:${vendor.v_email}`} className="text-blue-600 hover:text-blue-800 underline">{vendor.v_email}</a>
                    </p>
                    <p>Address: {vendor.v_address}</p>
                    <p>
                        Phone: <a href={`tel:${vendor.v_number}`} className="text-blue-600 hover:text-blue-800 underline">{vendor.v_number}</a>
                    </p>
                </div>
            </div>

            {/* Products Section */}
            <h2 className="text-3xl font-semibold mt-8 mb-4">Products</h2>
            {products.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <li key={product.id} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-2">Price: ${product.price}</p>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <a href={`tel:${vendor.v_number}`} className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                                Order Now
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No products available.</p>
            )}
        </div>
    );
};

export default VendorPage;
