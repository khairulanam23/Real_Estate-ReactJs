import { useLoaderData, useParams } from "react-router-dom";

const ElementDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const item = books.find((item) => item.id === idInt);
  const { estate_title, description, price, status, area, location, property_img } = item;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full md:flex">
        <img
          src={property_img}
          alt={estate_title}
          className="w-full md:w-1/2 object-cover h-96 md:h-auto"
        />
        <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
          <h1 className="text-3xl font-extrabold text-gray-800">{estate_title}</h1>
          <p className="text-gray-600 my-4 text-sm leading-relaxed">{description}</p>
          <div className="mt-4 space-y-2">
            <p className="text-lg font-semibold text-gray-700">Price: <span className="text-indigo-600">${price}</span></p>
            <p className="text-lg font-semibold text-gray-700">Status: <span className="text-green-600">{status}</span></p>
            <p className="text-lg font-semibold text-gray-700">Area: <span className="text-blue-600">{area} sq.ft</span></p>
          </div>
          <p className="mt-4 text-gray-500 italic">📍 {location}</p>
          <button className="mt-6 bg-indigo-600 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElementDetails;