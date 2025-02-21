import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import SearchInput from "./SearchInput";
import Contact from "../contact/Contact";
import Language from "../language/Language";
import { assets } from "../../assets/assets";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token")); 

 
  useEffect(() => {
    const updateToken = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", updateToken); // Listen for changes to localStorage

    return () => {
      window.removeEventListener("storage", updateToken);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-group") && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
  
    document.addEventListener("click", handleClickOutside);
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);
  

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    closeMenu();
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <div id="navbar">
      <div className="nav-logo" onClick={handleLogoClick} role="button" tabIndex="0">
        <img src={assets.logo} alt="MYMI Conseil Logo" className="logo" />
      </div>

      <div className="navbar-search">
        <SearchInput />
      </div>

      <div
        className="hamburger-menu"
        onClick={toggleMenu}
        role="button"
        tabIndex="0"
        aria-label="Toggle navigation menu"
      >
        <FaBars />
      </div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
  <div onClick={() => { closeMenu(); navigate("/"); }} className="nav-btn">Home</div>
  <div onClick={() => { closeMenu(); navigate("/treatments"); }} className="nav-btn">Treatments</div>
  <div onClick={() => closeMenu()} className="nav-btn"><Contact /></div>
  <div onClick={() => closeMenu()} className="nav-btn"><Language /></div>
  <div className="nav-btn">
    {token ? (
      <div className="profile-group">
        <img src={assets.profile_pic} alt="profile" className="profile_pic" />
        <img src={assets.dropdown_icon} alt="dropdown" className="dropdown_icon" />
        <div className="dropdown-menu">
          <p onClick={() => { closeMenu(); navigate("/myprofile"); }} className="menu-item">My Profile</p>
          <p onClick={() => { closeMenu(); navigate("/my-appointments"); }} className="menu-item">My Appointments</p>
          <p onClick={() => { closeMenu(); logout(); }} className="menu-item">Logout</p>
        </div>
      </div>
    ) : (
      <button 
        onClick={() => { closeMenu(); navigate("/login"); }} 
        className="create-account-btn"
      >
        Create Account
      </button>
    )}
  </div>
</div>
</div>
);
}

export default Navbar;
