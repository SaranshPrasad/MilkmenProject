import Milkmen from "./Milkmen";
import About from "./About";
import Services from "./Services";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import { useEffect, useRef } from "react";

const Body = () => {
    return (
        <>
            <div className="relative min-h-screen bg-cover bg-center bg-[url('https://media.istockphoto.com/id/1128687123/photo/shopping-bag-full-of-fresh-vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=jXInOVcduhEnfuUVffbUacldkF5CwAeThD3MDUXCItM=')]">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start px-6 lg:px-12 max-w-lg">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">HomeEase</h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white mb-6">Connecting you with local vendors for all your essential needs.</p>
                    <Link to="/services" className="bg-green-600 text-white py-2 px-4 rounded-lg text-lg font-bold transition duration-300 ease-in-out hover:bg-green-700">
                        View Services
                    </Link>
                </div>
            </div>

            {/* About Section */}
            <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <About />
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <Services />
                </div>
            </div>

            {/* Milkmen Section */}
            <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <Milkmen />
                </div>
            </div>
        </>
    );
};

export default Body;
