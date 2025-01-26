import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./treatmentsdropdown.css";

function TreatmentsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const treatments = [
    {
      id: 1,
      name: "Advanced Skin Care",
      path: "/booking/advanced-skin-care",
    },
    { id: 2, 
      name: "Hair & Scalp Care", 
      path: "/booking/hair-scalp-care" 
    },
    { id: 3, 
      name: "Waxing", 
      path: "/booking/waxing",
      subcategories: [
        { id: 1, name: "Face Wax Options", path: "/booking/facewax", description: "EyeBrows; ForeHead; UpperLip; Chin", price: "from 10€" },
        { id: 2, name: "Arm Wax Options", path: "/booking/armwax", description: "Half Arm; Full Arm", price: "from 15€" },
        { id: 3, name: "Leg Wax Options", path: "/booking/legxaw", description: "Half Legs; Thighs; Tree/Four Legs; Full Legs", price: "from 20€" },
        { id: 4, name: "Upper Body Wax Options", path: "/booking/upperbodywax", description: "Underarms; Stomach; Back", price: "from 15€" },
        { id: 5, name: "Bikini Wax Options", path: "/booking/bikiniwax", description: "Classic; Extended; Full", price: "from 15€" },
        { id: 6, name: "Ladies Wax Packages", path: "/booking/ladiespackages", description: "Combo: Half Legs + Underarms + Extended Bikini; Combo: Half Legs + Underarms + Full Bikini; Combo: Full Legs + Underarms + Full Bikini; Full Body", price: "from 50€" },
      ] 
    },
    { id: 4, 
      name: "Massages", 
      path: "/booking/massages"},
    {
      id: 5,
      name: "Manicures & Pedicures",
      path: "/booking/manicures-pedicures",
    },
    {
      id: 6,
      name: "Eyelash Extensions & Lifts",
      path: "/booking/eyelash-extensions",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div id="treatments-dropdown" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="dropdown-title"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="dropdown-content"
      >
       All Treatments
      </button>
      {isOpen && (
        <div
          className={`dropdown-content ${isOpen ? "open" : ""}`}
          id="dropdown-content"
        >
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              role="button"
              tabIndex="0"
              onClick={() => navigate(treatment.path)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  navigate(treatment.path);
              }}
              aria-label={`Navigate to ${treatment.name}`}
              className="dropdown-item"
            >
              {treatment.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TreatmentsDropdown;
