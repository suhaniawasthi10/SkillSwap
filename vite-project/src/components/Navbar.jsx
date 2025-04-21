import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react";

const Navbar = () => {
  const { user, logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Function to highlight the active nav link
  const getLinkClass = (path) =>
    location.pathname === path ? "text-blue-600 font-semibold" : "text-gray-700";

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo/Brand */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        SkillSwap
      </Link>

      {/* Nav Links */}
      <div className="flex gap-6 items-center">
        <Link to="/" className={`${getLinkClass("/")}`}>Home</Link>
        <Link to="/explore" className={`${getLinkClass("/explore")}`}>Explore</Link>
        <Link to="/profile" className={`${getLinkClass("/profile")}`}>Profile</Link>
        <Link to="/about" className={`${getLinkClass("/about")}`}>About</Link>

        {/* Auth Section */}
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Hi, {user}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
