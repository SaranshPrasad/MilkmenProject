import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VendorPage = () => {
    const { vendorId } = useParams();
    const [vendor, setVendor] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchVendorDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/vendors/${vendorId}`);
                const vendorData = await response.json();
                setVendor(vendorData);

                // Fetch products related to the vendor
                const productResponse = await fetch(`http://localhost:5000/vendors/${vendorId}/products`);
                const productData = await productResponse.json();
                
                // Ensure productData is an array
                setProducts(Array.isArray(productData) ? productData : []);
            } catch (error) {
                console.error('Error fetching vendor details:', error);
            }
        };

        fetchVendorDetails();
    }, [vendorId]);

    if (!vendor) return <div>Loading...</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">{vendor.v_name}</h1>
            <p>Email: <a href={`mailto:${vendor.v_email}`} className="text-blue-500 hover:underline">{vendor.v_email}</a></p>
            <p>Address: {vendor.v_address}</p>
            <p>Phone: <a href={`tel:${vendor.v_number}`} className="text-blue-500 hover:underline">{vendor.v_number}</a></p>
            
            <h2 className="text-3xl font-semibold mt-8 mb-4">Products</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products?.map((product) => (
                    <li key={product.id} className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-semibold">{product.name}</h3>
                        <p className="text-gray-600 mb-2">Price: ${product.price}</p>
                        <p className="text-gray-600">Description: {product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VendorPage;
