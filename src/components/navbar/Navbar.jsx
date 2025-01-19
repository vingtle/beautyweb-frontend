import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Treatments from "../../pages/Treatments";
import { FaBars } from "react-icons/fa";
import SearchInput from "./SearchInput";
import Contact from "../contact/Contact";
import Language from "../language/Language";
import {assets} from "../../assets/assets";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = Boolean(localStorage.getItem("token"));
  const [showMenu,setShowMenu] = useState(false);
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    closeMenu(); // Close the menu when the logo is clicked
    navigate("/"); // Navigate to home
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("#navbar") && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

    const logout = () => {
      localStorage.removeItem('token');
      setToken(null);
      navigate("/");
    }

  return (
    <div id="navbar">
      <div className="nav-logo" onClick={handleLogoClick} role="button" tabIndex="0">
        <img src={assets.logo1} alt="MYMI Conseil Logo" className="logo" />
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
        <div onClick={() => navigate("/")} className="nav-btn">
          Home
        </div>
        <div onClick={() => navigate("/treatments")} className="nav-btn">
          <Treatments />
        </div>
        <div className="nav-btn">
          <Contact />
        </div>
        <div className="nav-btn">
          <Language />
        </div>
        <div className="nav-btn">
          {
            token ? <div className="profile-group">
              <img src={assets.profile_pic} alt="profile_pic" className="profile_pic" />
              <img src={assets.dropdown_icon} alt="dropdow_icon" className="dropdown_icon" />
              <div className="dropdown-menu">
                <div>
                  <p onClick={()=>navigate("/myprofile")} className="menu-item">My Profile</p>
                  <p onClick={()=>navigate("/booking/:treatmentName/appointements")}className="menu-item">My Appointments</p>
                  <p onClick={()=>setToken(false) ? navigate("/home") : navigate("/")} className="menu-item">Logout</p>
                </div>
              </div>
            </div>
            :<button onClick={() => (isLoggedIn ? navigate("/myprofile") : navigate("/Login"))} className="create-account-btn"> Create Account
          </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
