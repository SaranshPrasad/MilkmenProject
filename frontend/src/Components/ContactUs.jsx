import React from 'react';

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-800">Get in Touch</h1>
                    <p className="text-gray-600 mt-4">We'd love to hear from you! Send us a message using the form below, or reach us directly through our contact details.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <form>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Full Name</label>
                                <input type="text" id="name" className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Your Name" required />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Your Email" required />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                                <textarea id="message" rows="5" className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Your Message" required></textarea>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Contact Details */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
                            <p className="text-gray-600 mt-2">Feel free to reach out to us through any of the following methods:</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                            <p className="text-gray-600">support@yourdomain.com</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                            <p className="text-gray-600">+1 (555) 123-4567</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Address</h3>
                            <p className="text-gray-600">123 Main Street, Anytown, USA</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Follow Us</h3>
                            <div className="flex space-x-4 mt-2">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82V14.692h-3.422v-3.647h3.422V8.157c0-3.39 2.056-5.237 5.06-5.237 1.44 0 2.677.107 3.037.154v3.523h-2.084c-1.632 0-1.949.775-1.949 1.91v2.5h3.894l-.507 3.647H16.456v9.308h6.22c.731 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.954 4.569c-.885.392-1.833.654-2.825.775 1.014-.609 1.794-1.574 2.163-2.724-.949.564-2.005.973-3.127 1.194-.897-.955-2.173-1.555-3.591-1.555-2.717 0-4.918 2.201-4.918 4.917 0 .385.045.761.127 1.124-4.083-.205-7.702-2.16-10.125-5.136-.423.729-.664 1.574-.664 2.476 0 1.709.87 3.216 2.188 4.099-.809-.026-1.568-.247-2.228-.616v.062c0 2.386 1.697 4.374 3.946 4.827-.413.111-.848.171-1.296.171-.317 0-.626-.031-.927-.088.627 1.956 2.444 3.381 4.6 3.423-1.68 1.317-3.808 2.102-6.114 2.102-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.211 7.548 2.211 9.057 0 14.01-7.507 14.01-14.01 0-.214-.004-.427-.015-.638.961-.694 1.796-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.063 2.633.314 3.608 1.289.975.975 1.227 2.242 1.289 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.314 2.633-1.289 3.608-.975.975-2.242 1.227-3.608 1.289-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.314-3.608-1.289-.975-.975-1.227-2.242-1.289-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.063-1.366.314-2.633 1.289-3.608.975-.975 2.242-1.227 3.608-1.289 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.67.013-4.947.072-1.527.068-2.86.319-3.898 1.356-1.037 1.037-1.288 2.371-1.356 3.898-.059 1.277-.072 1.688-.072 4.947s.013 3.67.072 4.947c.068 1.527.319 2.86 1.356 3.898 1.037 1.037 2.371 1.288 3.898 1.356 1.277.059 1.688.072 4.947.072s3.67-.013 4.947-.072c1.527-.068 2.86-.319 3.898-1.356 1.037-1.037 1.288-2.371 1.356-3.898.059-1.277.072-1.688.072-4.947s-.013-3.67-.072-4.947c-.068-1.527-.319-2.86-1.356-3.898-1.037-1.037-2.371-1.288-3.898-1.356-1.277-.059-1.688-.072-4.947-.072z" />
                                        <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zm0 10.164a4.002 4.002 0 1 1 0-8.004 4.002 4.002 0 1 1 0 8.004zm6.406-11.845a1.44 1.44 0 1 0 0-2.882 1.44 1.44 0 1 0 0 2.882z" />
                                    </svg>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M4.984 3.5a2.186 2.186 0 1 1 0 4.372 2.186 2.186 0 1 1 0-4.372zm.012 4.72H.936v14.28h4.06V8.22zm7.306-.036H9.232v14.288h4.06V13.86c0-2.605 3.481-2.818 3.481 0v8.612h4.06v-9.676c0-5.965-6.757-5.754-8.537-2.818v-.8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
