import React, { useState } from "react";
import WaxModal from "./Waxmodal/Waxmodal";
import "./waxing.css";

const Waxing = () => {
  const [activeModal, setActiveModal] = useState(null);

  const waxOptions = [
    { id: "facewax", title: "Face Wax Options", price: "from 10€" },
    { id: "armwax", title: "Arm Wax Options", price: "from 15€" },
    { id: "legwax", title: "Leg Wax Options", price: "from 20€" },
    { id: "upperbodywax", title: "Upper Body Wax Options", price: "from 15€" },
    { id: "bikiniwax", title: "Bikini Wax Options", price: "from 15€" },
    { id: "ladiespackages", title: "Ladies Wax Packages", price: "from 50€" },
  ];

  const handleModalOpen = (id, title) => {
    setActiveModal({ id, title });
  };

  const handleModalClose = () => {
    setActiveModal(null);
  };

  return (
    <div className="waxing-container">
      <h1 className="waxing-title">Ladies' Waxing</h1>
      <div className="waxing-options">
        {waxOptions.map((option) => (
          <div key={option.id} className="waxing-card">
            <h2>{option.title}</h2>
            <p>{option.price}</p>
            <button
              className="book-now-btn"
              onClick={() => handleModalOpen(option.id, option.title)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {activeModal && (
        <WaxModal
          category={activeModal.id}
          title={activeModal.title}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default Waxing;

