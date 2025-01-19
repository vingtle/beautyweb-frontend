/*import React from "react";
import { useParams } from "react-router-dom";
import AdvancedSkinCare from "./Treatment Categorys/AdvancedSkincare";
import LuxuryHair from "./Treatment Categorys/Luxuryhair";
import Massages from "./Treatment Categorys/Massages";
import Waxing from "./Treatment Categorys/Waxing";
import ManicuresPedicures from "./Treatment Categorys/ManicuresPedicures";
import Eyelash from "./Treatment Categorys/Eyeslash";
import "./treatmentcard.css";

const TreatmentCard = () => {
  const { treatmentCategory } = useParams();
  console.log("Treatment Category from URL:", treatmentCategory);


  const renderCard = () => {
  if (!treatmentCategory) {
    return <div>Please select a valid treatment category.</div>;
  }
  switch (treatmentCategory) {
    case "advanced-skin-care":
      return <AdvancedSkinCare />;
    case "waxing":
      return <Waxing />;
    case "hair-scalp-care":
      return <LuxuryHair />;
    case "massages":
      return <Massages />;
    case "manicures-pedicures":
      return <ManicuresPedicures />;
    case "eyelash-extensions-lifts":
      return <Eyelash />;
    default:
      return <div>Unknown Treatment</div>;
  }
};

  return <div id="treatment-card-container">{renderCard()}</div>;
};

export default TreatmentCard;*/


import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./treatmentcard.css";
import { AppContext } from "../../context/AppContext";

const TreatmentCard = () => {

    const { treatmentCategories } = useContext(AppContext);
  const { treatmentCategory } = useParams();
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Find the selected category
  const category = treatmentCategories.find(
    (cat) =>
      cat.path === `/treatments/${treatmentCategory.toLowerCase().replace(/\s/g, "-")}`
  );

  if (!category) {
    return <div>Invalid Treatment Category. Please select a valid one.</div>;
  }

  const handleModalOpen = (treatment) => {
    setModalData(treatment);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleBookNow = (treatmentName) => {
    window.location.href = `/booking/${treatmentName
      .toLowerCase()
      .replace(/\s/g, "-")}`;
  };

  return (
    <div
      className="treatment-category"
      style={{
        backgroundImage: `url(${category.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "20px",
        color: "#fff",
      }}
    >
      <h1>{category.name}</h1>
      <div className="treatment-grid">
        {category.treatments.map((treatment) => (
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

export default TreatmentCard;

