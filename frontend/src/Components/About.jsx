const About = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center bg-gray-100 p-6">
            <div className="md:w-1/2 flex flex-col justify-center p-6">
                <h4 className="text-lg font-semibold text-blue-600 mb-2">CONNECT LOCALLY</h4>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Your gateway to local vendors</h1>
                <p className="text-gray-700 text-lg md:text-xl mb-6">
                    Discover a world of possibilities right at your fingertips. This platform connects you with a variety of local vendors in Ranchi, offering everything from essential products to specialized services. Enjoy a user-friendly experience with easy navigation, secure payments, and real-time delivery tracking. Whether you're seeking a unique gift or a trusted service provider, find exactly what you need with just a few clicks.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 text-lg font-medium px-4 py-2 rounded-md   transition duration-300 group">
                    Get in touch 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
            </div>
            <div className="md:w-1/2 flex justify-center p-6">
                <img
                    src="https://media.istockphoto.com/id/1319927536/photo/shopping-basket-full-of-groceries-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=c3F7BAAHABSaYyKmGzba7pUhxHXemU_ZpGqMjgiskhc="
                    alt="Local Vendor"
                    className="rounded-lg shadow-lg max-w-full h-auto"
                />
            </div>
        </div>
    );
};

export default About;
