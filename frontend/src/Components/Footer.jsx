const Footer = () => {
    return (
        <footer className="bg-indigo-900 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                <div className="footer-column">
                    <h2 className="text-2xl font-bold mb-4">HomeEase</h2>
                    <p className="mb-2">Fresh products</p>
                    <p className="text-sm text-gray-300 mb-4">
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.
                    </p>
                    <a href="#" className="text-indigo-400 hover:text-indigo-300 font-semibold">
                        Read More
                    </a>
                </div>

                <div className="footer-column">
                    <h3 className="text-xl font-semibold mb-4">Shop Info</h3>
                    <ul>
                        <li><a href="#" className="text-gray-400 hover:text-indigo-300">About Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-indigo-300">Contact Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-indigo-300">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-indigo-300">Terms & Condition</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-indigo-300">Return Policy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-indigo-300">FAQs & Help</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="text-xl font-semibold mb-4">Account</h3>
                    <ul>
                        <li><a href="#" className="text-gray-400 hover:text-indigo-300">My Account</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-indigo-300">Shop details</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-indigo-300">Shopping Cart</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="text-xl font-semibold mb-4">Contact</h3>
                    <p className="text-gray-400">Address: Dhurwa Ranchi Jharkhand</p>
                    <p className="text-gray-400">Email: <a href="mailto:Example@gmail.com" className="hover:text-indigo-300">Example@gmail.com</a></p>
                    <p className="text-gray-400">Phone: +0123 4567 8910</p>         
                </div>
            </div>
        </footer>
    );
};

export default Footer;
