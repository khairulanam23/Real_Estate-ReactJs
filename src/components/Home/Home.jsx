import { useEffect, useState } from "react";
import Element from "../Element/Element";

const Home = () => {
  const [elements, setElements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("resource.json")
      .then((res) => res.json())
      .then((data) => {
        setElements(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching property data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="animate-fade-down">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Manzil</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl">
              Find Your Dream Home with Us
            </p>
          </div>
          <div className="mt-8 animate-fade-up">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mr-4">
              View Properties
            </button>
            <button className="px-6 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Contact Agent
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                Explore Your Future Home
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties designed to transform your lifestyle and create lasting memories.
            </p>
          </div>

          {/* Property Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-16 transform hover:scale-[1.01] transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Any Location</option>
                  <option>Downtown</option>
                  <option>Suburbs</option>
                  <option>Beachfront</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Any Type</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Villa</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Any Price</option>
                  <option>$100k - $200k</option>
                  <option>$200k - $500k</option>
                  <option>$500k+</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Properties
              </button>
            </div>
          </div>

          {/* Featured Properties */}
          <div className="mb-16">
            {isLoading ? (
              // Loading skeleton
              <div className="grid lg:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                    <div className="h-64 bg-gray-300"></div>
                    <div className="p-6">
                      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-8">
                {elements.map(item => <Element key={item.id} item={item}></Element>)}
              </div>
            )}
          </div>

          {/* Why Choose Us Section */}
          <div className="py-10 bg-gray-50 rounded-2xl shadow-inner mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Manzil</h2>
              <div className="w-16 h-1 bg-blue-500 rounded mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 px-6">
              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Fast & Reliable</h3>
                <p className="text-gray-600 text-center">We provide quick and dependable service to ensure you find your dream home without delay.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Trusted Advisors</h3>
                <p className="text-gray-600 text-center">Our experienced agents are committed to providing honest advice and exceptional service.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Best Value</h3>
                <p className="text-gray-600 text-center">We help you find properties that offer the best value for your investment in prime locations.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Let our expert agents guide you through the process and help you discover the perfect property that meets all your requirements.
            </p>
            <button className="px-8 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;