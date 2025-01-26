import React, { useContext, useState } from "react";
import "./treatmentcard.css";
import { AppContext } from "../../context/AppContext";

const TreatmentCard = ({ category }) => {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (modalData) => {
    setModalData(modalData); // Handle modal data
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleBookNow = (subcategory, treatmentName) => {
    const bookingPath = subcategory
      ? `/booking/${subcategory}/${treatmentName.toLowerCase().replace(/\s/g, "-")}`
      : `/booking/${treatmentName.toLowerCase().replace(/\s/g, "-")}`;
    window.location.href = bookingPath;
  };

  return (
    <div className="treatment-category">
      <h1>{category.title || category.name}</h1>
      <div className="treatment-grid">
        {/* Check if `category.treatments` is a React component */}
        {React.isValidElement(category.treatments) ? (
          <div>{category.treatments}</div>
        ) : Array.isArray(category.treatments) ? (
          /* If treatments are an array, render cards */
          category.treatments.map((treatment) => (
            <div key={treatment.id} className="treatment-card">
              <h3>{treatment.name}</h3>
              <p>Duration: {treatment.duration || "N/A"}</p>
              <p>{treatment.description || "No additional details provided."}</p>
              <span className="price">{treatment.price || "N/A"}</span>
              <button
                className="info-btn"
                type="button"
                onClick={() => handleModalOpen(treatment)}
              >
                See Info
              </button>
              <button
                className="book-btn"
                type="button"
                onClick={() =>
                  handleBookNow(treatment.subcategory, treatment.name)
                }
              >
                Book Now
              </button>
            </div>
          ))
        ) : (
          <p>No treatments available.</p>
        )}
      </div>

      {/* Modal for detailed treatment information */}
      {isModalOpen && modalData && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalData.name || modalData.title}</h3>
            <p>{modalData.description || "No additional details provided."}</p>
            <p>Duration: {modalData.duration || "N/A"}</p>
            <p>Price: {modalData.price || "N/A"}</p>
            <button type="button" onClick={handleModalClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TreatmentCard;
