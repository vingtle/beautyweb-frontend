import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WaxModal from "./Waxmodal/WaxModal";
import Haircare from "../../../assets/Colorful.jpg";
import "./waxing.css";

const Waxing = () => {
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();

  const waxOptions = {
      name: "Wax Options",
      treatments: [
        {
          id: 1,
          name: "Face Wax Options",
          description: "Eyebrows, Forehead, UpperLip, Chin",
          price: "from 10€",
          subcategories: [
            { id: 1, name: "Eyebrows", duration: "15 min", price: "15 €" },
            { id: 2, name: "Forehead", duration: "10 min", price: "10 €" },
            { id: 3, name: "Upper Lip", duration: "10 min", price: "10 €" },
            { id: 4, name: "Chin", duration: "10 min", price: "10 €" },
          ]
        },
        {
          id: 2,
          name: "Leg Wax Options",
          description: "Half Legs, Thighs, Three/Four Legs, Full Legs",
          price: "from 20€",
          subcategories: [
            { id: 1, name: "Half Legs", duration: "20 min", price: "20 €" },
            { id: 2, name: "Thighs", duration: "20 min", price: "22 €" },
            { id: 3, name: "Three/Four Legs", duration: "25 min", price: "30 €" },
            { id: 4, name: "Full Legs", duration: "30 min", price: "40 €" },
          ]
        },
        {
          id: 3,
          name: "Arm Wax Options",
          description: "Half Arm, Full Arm",
          price: "from 15€",
          subcategories: [
            { id: 1, name: "Half Arm", duration: "15 min", price: "15 €" },
            { id: 2, name: "Full Arm", duration: "20 min", price: "20 €" },
          ]
        },

        {
          id: 4,
          name: "Upper Body Wax Options",
          description: "Underarms, Stomach, Back",
          price: "from 15€",
          subcategories: [
            { id: 1, name: "Underarms", duration: "15 min", price: "10 €" },
            { id: 2, name: "Stomach", duration: "15 min", price: "10 €" },
            { id: 3, name: "Back", duration: "15 min", price: "15 €" },
          ]
        },
        {
          id: 5,
          name: "Bikini Wax Options",
          description: "Classic, Extended, Full",
          price: "from 15€",
          subcategories: [
            { id: 1, name: "Classic Bikini", duration: "20 min", price: "15 €" },
            { id: 2, name: "Extended Bikini", duration: "25 min", price: "22 €" },
            { id: 3, name: "Full Bikini", duration: "30 min", price: "30 €" },
          ]
        },
        {
          id: 6,
          name: "Ladies Wax Packages",
          description:
            "Combo: Half Legs + Underarms + Extended Bikini, Combo: Half Legs + Underarms + Full Bikini, Combo: Full Legs + Underarms + Full Bikini, Full Body",
          price: "from 50€",
          subcategories: [
            { id: 1, name: "Combo: Half Legs + Underarms + Extended Bikini", duration: "50 min", price: "50 €" },
            { id: 2, name: "Combo: Half Legs + Underarms + Full Bikini", duration: "55 min", price: "55 €" },
            { id: 3, name: "Combo: Full Legs + Underarms + Full Bikini", duration: "60 min", price: "60 €" },
            { id: 4, name: "Full Body", duration: "N/A", price: "120 €" },
          ]
        },
      ],
    };



  const handleBookNow = (treatment, subcategory, treatmentName) => {
    if (treatment && subcategory && treatmentName) {
      navigate(`/booking/${subcategory}/${treatmentName.toLowerCase().replace(/\s/g, "-")}`);
    } else if (treatment && subcategory) {
      navigate(`/booking/${subcategory}`);
    } else {
      console.error("Subcategory or treatment name is missing!");
    }
  };

  const handleModalOpen = (modalData) => {
    setActiveModal(modalData);
  };

  const handleModalClose = () => {
    setActiveModal(null);
  };

  return (
    <div className="waxing-container"
    style={{
            backgroundImage: `url(${Haircare})`,
          }}>
      <h1 className="waxing-title">{waxOptions.name}</h1>
      <div className="waxing-options">
        {waxOptions.treatments.map((treatment) => (
          <div key={treatment.id} className="waxing-card">
            <h2>{treatment.name}</h2>
            <div className="subcategory-list">
              {treatment.subcategories.map((subcategory) => (
                <div key={subcategory.id} className="subcategory-card">
                  <h3>{subcategory.name}</h3>
                  <p>{subcategory.duration}</p>
                  <p>{subcategory.price}</p>
                  <button
                    className="book-btn"
                    type="button"
                    onClick={() => handleBookNow(treatment.name, subcategory.name)}
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {activeModal && (
        <WaxModal
          subcategory={activeModal.subcategory || ""}
          title={activeModal.name || ""}
          description={activeModal.description}
          price={activeModal.price}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default Waxing;