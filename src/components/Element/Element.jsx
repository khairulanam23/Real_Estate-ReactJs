import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Element = ({ item }) => {
  const { estate_title, property_img, description, id } = item;
  const { user } = useAuth();

  return (
    <div className="container mx-auto p-6 flex justify-center">
      <div className="relative w-96 bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <figure>
          <img
            className="w-full h-56 object-cover"
            src={property_img}
            alt={estate_title}
          />
        </figure>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{estate_title}</h2>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <Link
              to={user ? `/details/${id}` : "/login"}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-indigo-700 transition duration-300"
            >
              {user ? "View Details" : "Login to view details"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Element.propTypes = {
  item: PropTypes.object,
};

export default Element;