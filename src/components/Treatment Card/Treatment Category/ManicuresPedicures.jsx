import React, { useState } from "react";
import Haircare from "../../../assets/Colorful.jpg";
import "./manicurespedicures.css";

function ManicuresPedicures() {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const treatments= [
    {
        id: 1,
        name: "Express Manicure",
        duration: "45 min",
        price: "45 €",
        description: "A quick nail treatment that's designed to be efficient and high-quality and apply gel polish color of your choice."
    },
    {
        id: 2,
        name: "Apply Gel Polish only",
        duration: "25 min",
        price: "30 €",
    },
    {
        id: 3,
        name: "Powder resin-complete installation with Gel polish",
        duration: "80 min",
        price: "80 €",
    },
    {
        id: 4,
        name: "Refill powder resin with gel polish renew",
        duration: "70 min",
        price: "70 €",
    },
    {
        id: 5,
        name: "Gel polish Removal",
        duration: "15 min",
        price: "15 €",
    },
    {
        id: 6,
        name: "Removal false nails",
        duration: "30 min",
        price: "30 €",
    },
    {
        id: 7,
        name: "Feet Spa with Gel polish application",
        duration: "70 min",
        price: "75 €",
    },
];

const handleModalOpen = (treatment) => {
  setModalData(treatment);
  setIsModalOpen(true);
};

const handleModalClose = () => {
  setIsModalOpen(false);
  setModalData(null);
};

const handleBookNow = (treatmentName) => {
  window.location.href = `/booking/${treatmentName.toLowerCase().replace(/\s/g, "-")}`;
};

  return (
    <div
    className="nails-treatments"
          style={{
            backgroundImage: `url(${Haircare})`,
          }}>
     <h1 className="nails-treatments-title">Manicures & Pedicures</h1>
      <div className="treatment-grid">
        {treatments.map((treatment) => (
          <div key={treatment.id} className="treatment-card">
            <h3>{treatment.name}</h3>
            <p>Duration: {treatment.duration}</p>
            <button
              className="info-btn"
              type="button"
              onClick={() => handleModalOpen(treatment)}
            >
              See Info
            </button>
            <p className="price">{treatment.price}</p>
            <button
              className="book-btn"
              type="button"
              onClick={() => handleBookNow(treatment.name)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalData.name}</h3>
            <p>{modalData.description}</p>
            <p>Duration: {modalData.duration}</p>
            <p>Price: {modalData.price}</p>
            <button type="button" onClick={handleModalClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ManicuresPedicures;
