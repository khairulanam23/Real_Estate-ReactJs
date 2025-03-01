import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { logout, user } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const activeLink = "text-blue-600 font-medium";
  const normalLink = "text-gray-700 hover:text-blue-500 transition-colors duration-300";

  return (
    <div className="sticky top-0 z-50">
      <div className={`w-full px-4 sm:px-6 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-4"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl sm:text-2xl font-bold tracking-tight text-blue-700 hover:text-blue-800 transition-colors duration-300">
            MANZiL
          </Link>
          
          {/* Desktop Menu - Show on md and above */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? activeLink : normalLink
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive ? activeLink : normalLink
            }>
              About Us
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? activeLink : normalLink
            }>
              Contact Us
            </NavLink>
            
            {/* Auth Section */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center focus:outline-none">
                  <span className="mr-2 font-medium hidden md:block truncate max-w-[80px] lg:max-w-[120px]">
                    {user.name || 'User'}
                  </span>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-blue-600 transition-all duration-300 group-hover:border-blue-400">
                    <img 
                      src={user.profileImageUrl || 'https://via.placeholder.com/40'} 
                      alt="Profile"
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/40?text=User';
                      }}
                    />
                  </div>
                </button>
                
                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden scale-0 origin-top-right group-hover:scale-100 transition-transform duration-200 z-50">
                  <div className="py-2">
                    <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700">
                      Profile
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700">
                      Settings
                    </Link>
                    <button 
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="px-4 py-2 text-sm md:text-base bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow"
              >
                Login
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {user && (
              <div className="mr-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-blue-600">
                  <img 
                    src={user.profileImageUrl || 'https://via.placeholder.com/32'} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/32?text=User';
                    }} 
                  />
                </div>
              </div>
            )}
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-gray-700" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-gray-700" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Full Screen Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
        mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className={`mobile-menu-container fixed right-0 top-0 h-full w-64 sm:w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Menu</h3>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Close menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-gray-700" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {user && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-600">
                    <img 
                      src={user.profileImageUrl || 'https://via.placeholder.com/48'} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/48?text=User';
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{user.name || 'User'}</p>
                    <p className="text-sm text-gray-500 truncate">{user.email || ''}</p>
                  </div>
                </div>
              </div>
            )}
            
            <nav className="space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </NavLink>
              
              {user ? (
                <>
                  <div className="h-px bg-gray-200 my-4"></div>
                  
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link 
                    to="/settings" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button 
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  className="block w-full px-4 py-2 mt-4 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;