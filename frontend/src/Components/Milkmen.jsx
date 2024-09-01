import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Milkmen = () => {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                const response = await fetch('http://localhost:5000/vendors');
                const data = await response.json();
                setVendors(data);
            } catch (error) {
                console.error('Error fetching vendors:', error);
            }
        };

        fetchVendors();
    }, []);

    const scrollLeft = () => {
        document.getElementById('vendorContainer').scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        document.getElementById('vendorContainer').scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    };

    return (
        <div className="px-4 py-8 mx-auto max-w-7xl relative my-12">
            <h4 className="text-lg font-semibold text-gray-600 mb-4">Featuring</h4>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Milkmen Available</h1>
            
            <div className="relative flex items-center">
                {/* Left Arrow */}
                <button 
                    onClick={scrollLeft} 
                    className="absolute left-0 -ml-10 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 focus:outline-none z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                
                <div id="vendorContainer" className="overflow-hidden w-full">
                    <div className="flex gap-6 px-4 py-2 overflow-x-auto scroll-smooth scrollbar-hidden">
                        {vendors.map((vendor) => (
                            <Link 
                                to={`/vendor/${vendor.v_id}`} 
                                key={vendor.v_id} 
                                className="bg-white rounded-lg shadow-lg overflow-hidden w-80 sm:w-96 md:w-[28rem] flex-shrink-0 p-6 transition-transform transform hover:scale-105 mx-4"
                            >
                                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{vendor.v_name}</h2>
                                
                                {/* Responsive Image with 16:9 Aspect Ratio */}
                                <div className="relative w-full h-0 pb-[56.25%] mb-4">
                                    <img 
                                        src="https://cdn.pixabay.com/photo/2019/05/03/16/26/street-vendor-4176310_1280.jpg" 
                                        alt={`Image of ${vendor.v_name}`} 
                                        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                
                                <p className="text-gray-600 mb-1">Email: <a href={`mailto:${vendor.v_email}`} className="text-blue-500 hover:underline">{vendor.v_email}</a></p>
                                <p className="text-gray-600 mb-1">Address: {vendor.v_address}</p>
                                <p className="text-gray-600">Phone: <a href={`tel:${vendor.v_number}`} className="text-blue-500 hover:underline">{vendor.v_number}</a></p>
                            </Link>
                        ))}
                    </div>
                </div>
                
                {/* Right Arrow */}
                <button 
                    onClick={scrollRight} 
                    className="absolute right-0 -mr-10 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 focus:outline-none z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </div>
    );
};

export default Milkmen;
