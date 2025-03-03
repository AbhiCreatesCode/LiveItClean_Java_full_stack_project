import { useContext } from "react";
import { FaUser, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

const Header = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // ✅ Use context instead of localStorage
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Site Name */}
        <NavLink to="/" className="text-3xl font-bold text-green-700 hover:text-green-600 transition duration-300">
          LiveItClean
        </NavLink>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 font-semibold text-gray-700">
          <NavLink to="/" className="hover:text-green-600 hover:text-lg transition duration-300">Home</NavLink>
          <NavLink to="/explore" className="hover:text-green-600 hover:text-lg transition duration-300">Explore</NavLink>
          <NavLink to="/trending" className="hover:text-green-600 hover:text-lg transition duration-300">Trending</NavLink>
          <NavLink to="/genres" className="hover:text-green-600 hover:text-lg transition duration-300">Genres</NavLink>
          <NavLink to="/watchlist" className="hover:text-green-600 hover:text-lg transition duration-300">Watchlist</NavLink>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center space-x-6">
          {user ? (
            <div className="flex space-x-4 items-center">
              <NavLink to="/profile" className="px-4 py-2 flex items-center gap-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 hover:scale-105 transition duration-300 shadow-md">
                <FaUser /> {user.username}
              </NavLink>
              <NavLink to="/cart" className="px-4 py-2 flex items-center gap-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-md">
                <FaShoppingCart /> Cart
              </NavLink>
              <button className="px-4 py-2 flex items-center gap-2 bg-red-600 text-white rounded-full hover:bg-red-700 hover:scale-105 transition duration-300 shadow-md" onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </div>
          ) : (
            <NavLink className="px-4 py-2 border rounded-full text-green-700 hover:bg-green-100 hover:scale-105 transition duration-300 shadow-md" to="/login">
              Sign In
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
