import React, { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';

const VendorDashboard = () => {
    const nameRef = useRef('');
    const priceRef = useRef('');
    const descRef = useRef('');
    const vendor_id = Cookies.get('vendor_id');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products once component mounts
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/vendor/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({ vendor_id }),
            });

            const data = await response.json();
            if (data.success) {
                setProducts(data.products);
            } else {
                console.error('Error fetching products:', data.message);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const description = descRef.current.value;
        const price = priceRef.current.value;

        try {
            const response = await fetch('http://localhost:5000/vendor/add-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({ name, description, price, vendor_id }),
            });

            const data = await response.json();
            if (data.success) {
                fetchProducts();
                nameRef.current.value = '';
                descRef.current.value = '';
                priceRef.current.value = '';
            } else {
                alert('Failed to add product');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product');
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/vendor/delete-product/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });

            const data = await response.json();
            if (data.success) {
                fetchProducts();
            } else {
                alert('Failed to delete product');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900">Vendor Dashboard</h1>
                </div>

                {/* Add Product Form */}
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add Product</h2>
                    <form onSubmit={handleAddProduct} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <input
                            type="text"
                            placeholder="Product Name"
                            ref={nameRef}
                            required
                            className="p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            ref={priceRef}
                            required
                            className="p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
                        />
                        <textarea
                            placeholder="Product Description"
                            ref={descRef}
                            required
                            className="col-span-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
                        />
                        <button
                            type="submit"
                            className="col-span-2 p-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                        >
                            Add Product
                        </button>
                    </form>
                </div>

                {/* Product List */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Your Products</h2>
                    {products.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {products.map((product) => (
                                <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                                    <p className="text-gray-600 my-2">{product.description}</p>
                                    <p className="text-gray-900 font-bold">Price: ${product.price}</p>
                                    <button
                                        onClick={() => handleDeleteProduct(product.id)}
                                        className="mt-4 p-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No products available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VendorDashboard;
