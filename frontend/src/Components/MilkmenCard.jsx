const MilkmenCard = ({ vendor }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-64 p-4 transition-transform transform hover:scale-105 mx-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{vendor.v_name}</h2>
            <p className="text-gray-600 mb-1">Email: <a href={`mailto:${vendor.v_email}`} className="text-blue-500 hover:underline">{vendor.v_email}</a></p>
            <p className="text-gray-600 mb-1">Address: {vendor.v_address}</p>
            <p className="text-gray-600">Phone: <a href={`tel:${vendor.v_number}`} className="text-blue-500 hover:underline">{vendor.v_number}</a></p>
        </div>
    );
};

export default MilkmenCard;
