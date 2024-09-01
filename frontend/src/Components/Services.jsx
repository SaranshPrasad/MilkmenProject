const Services = () => {
    return (
        <div className="px-4 py-8 mx-auto max-w-7xl">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">WHAT WE OFFER</h4>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Explore diverse products and services</h1>

            <div className="flex flex-wrap justify-around gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px]">
                    <img src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Local vendor connection" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-green-600 hover:underline cursor-pointer">Local vendor connection &rarr;</h3>
                        <p className="text-gray-600">Find local vendors that cater to your needs seamlessly.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px]">
                    <img src="https://www.wilmarinc.com/hubfs/AdobeStock_320335514-1.jpeg" alt="Real-Time delivery tracking" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-green-600 hover:underline cursor-pointer">Real-Time delivery tracking &rarr;</h3>
                        <p className="text-gray-600">Stay updated on your order's journey with ease.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px]">
                    <img src="https://www.nextservices.io/wp-content/uploads/2023/03/vendor-management-system-Next-Services-1024x576.png" alt="User-Friendly vendor dashboard" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-green-600 hover:underline cursor-pointer">User-Friendly vendor dashboard &rarr;</h3>
                        <p className="text-gray-600">Empower vendors to manage their offerings efficiently.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;
