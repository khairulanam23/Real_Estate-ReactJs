import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';

const RealEstateAbout = () => {
  // Animation effect on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });
    
    // Delayed setup to ensure DOM is ready
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        observer.observe(element);
      });
    }, 100);
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl w-full bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
          
          {/* Top decorative bar */}
          <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          
          <div className="p-8 sm:p-12">
            {/* Heading - removed initial opacity-0 to ensure visibility */}
            <div className="animate-on-scroll transition-all duration-700">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                  About Our Real Estate Service
                </span>
              </h1>
            </div>
            
            {/* Divider */}
            <div className="my-6 w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded transition-all duration-700 delay-200"></div>
            
            {/* First paragraph - removed initial opacity-0 */}
            <div className="animate-on-scroll transition-all duration-700 delay-300">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to our real estate service! We are dedicated to helping
                you find your dream home or property. With years of experience in
                the real estate industry, we provide expert guidance and
                personalized assistance to meet your needs.
              </p>
            </div>
            
            {/* Second paragraph - removed initial opacity-0 */}
            <div className="mt-6 animate-on-scroll transition-all duration-700 delay-500">
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you are buying, selling, or renting, our team of
                professionals is here to assist you every step of the way. We
                understand that real estate transactions can be complex, which is
                why we strive to make the process as smooth and seamless as
                possible for our clients.
              </p>
            </div>
            
            {/* Service highlights with icons - removed initial opacity-0 */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll transition-all duration-700 delay-700">
              <div className="p-4 rounded-lg hover:bg-blue-50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center">Buy</h3>
              </div>
              <div className="p-4 rounded-lg hover:bg-blue-50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center">Sell</h3>
              </div>
              <div className="p-4 rounded-lg hover:bg-blue-50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center">Rent</h3>
              </div>
            </div>
            
            {/* Call to action - removed initial opacity-0 */}
            <div className="mt-10 animate-on-scroll transition-all duration-700 delay-900">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Contact us today to learn more about our services and how we can
                help you achieve your real estate goals.
              </p>
              
              <div className="mt-8 flex justify-center">
                <NavLink to="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center group">
                    Contact Us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateAbout;