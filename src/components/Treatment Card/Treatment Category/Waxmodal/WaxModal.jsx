import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import "./waxmodal.css";

const WaxModal = ({ subcategory, title, onClose }) => {
  const [treatments, setTreatments] = useState([]);
  const { treatmentsSubcategory } = useParams();
  const navigate = useNavigate();



  useEffect(() => {
    const waxTreatments = {
      armwax: [
        { id: 1, name: "Half Arm", duration: "15 min", price: "15 €" },
        { id: 2, name: "Full Arm", duration: "20 min", price: "20 €" },
      ],
      bikiniwax: [
        { id: 1, name: "Classic Bikini", duration: "20 min", price: "15 €" },
        { id: 2, name: "Extended Bikini", duration: "25 min", price: "22 €" },
        { id: 3, name: "Full Bikini", duration: "30 min", price: "30 €" },
      ],
      facewax: [
        { id: 1, name: "EyeBrows", duration: "15 min", price: "15 €" },
        { id: 2, name: "ForeHead", duration: "10 min", price: "10 €" },
        { id: 3, name: "UpperLip", duration: "10 min", price: "10 €" },
        { id: 4, name: "Chin", duration: "10 min", price: "10 €" },
      ],
      legwax: [
        { id: 1, name: "Half Legs", duration: "20 min", price: "20 €" },
        { id: 2, name: "Thighs", duration: "20 min", price: "22 €" },
        { id: 3, name: "Three/Four Legs", duration: "25 min", price: "30 €" },
        { id: 4, name: "Full Legs", duration: "30 min", price: "40 €" },
      ],
      upperbodywax: [
        { id: 1, name: "Underarms", duration: "15 min", price: "10 €" },
        { id: 2, name: "Stomach", duration: "15 min", price: "10 €" },
        { id: 3, name: "Back", duration: "15 min", price: "15 €" },
      ],
      ladiespackages: [
        { id: 1, name: "Combo: Half Legs + Underarms + Extended Bikini", duration: "50 min", price: "50 €" },
        { id: 2, name: "Combo: Half Legs + Underarms + Full Bikini", duration: "55 min", price: "55 €" },
        { id: 3, name: "Combo: Full Legs + Underarms + Full Bikini", duration: "60 min", price: "60 €" },
        { id: 4, name: "Full Body", duration: "N/A", price: "120 €" },
      ],
    };

    if (treatmentsSubcategory && waxTreatments[treatmentsSubcategory] && subcategory) {
      setTreatments(waxTreatments[treatmentsSubcategory, subcategory]);
    } else {
      setTreatments([]);
    }
  }, [treatmentsSubcategory, waxTreatments]);


  const handleBookNow = (treatmentName) => {
    navigate(`/booking/${treatmentName.toLowerCase().replace(/\s/g, "-")}`);
  };

  
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/treatments");
    }
  };


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{treatmentsSubcategory?.replace(/-/g, " ")}</h3>
        {treatments.length > 0 ? (
          treatments.map((treatment) => (
            <div key={treatment.id} className="treatment-card">
              <h3>{treatment.name}</h3>
              <p>Duration: {treatment.duration}</p>
              <p>Price: {treatment.price}</p>
              <button
                type="button"
                className="book-btn"
                onClick={() => handleBookNow(treatment.name)}
              >
                Book Now
              </button>
            </div>
          ))
        ) : (
          <p>No treatments available for the selected category.</p>
        )}
          <button onClick={handleClose}>Close</button>         
      </div>
    </div>
  );
};

WaxModal.propTypes = {
  onClose: PropTypes.func,
  subcategory: PropTypes.string,
  title: PropTypes.func,
};

export default WaxModal;

/*
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./waxmodal.css";

const WaxModal =  ({ subcategory, onClose }) => {
  const [treatments, setTreatments] = useState([]);
  const { treatmentsSubcategory, treatmentName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const waxTreatments = [
      {
        id: 1, 
       title: "facewax",
       subcategory: [
        { id: 1, name: "Eyebrows", duration: "15 min", price: "15 €" },
        { id: 2, name: "Forehead", duration: "10 min", price: "10 €" },
        { id: 3, name: "Upper Lip", duration: "10 min", price: "10 €" },
        { id: 4, name: "Chin", duration: "10 min", price: "10 €" },
        ]},
        {
         id: 2,
         title: "armwax",
         subcategory: [
          { id: 1, name: "Half Arm", duration: "15 min", price: "15 €" },
          { id: 2, name: "Full Arm", duration: "20 min", price: "20 €" },
         ]
        },
        {
          id: 3,
          title: "bikiniwax",
          subcattgory: [
            { id: 1, name: "Classic Bikini", duration: "20 min", price: "15 €" },
            { id: 2, name: "Extended Bikini", duration: "25 min", price: "22 €" },
            { id: 3, name: "Full Bikini", duration: "30 min", price: "30 €" },
          ]
        },
        {
          id: 4,
          title: "legwax",
          subcategpry: [
            { id: 1, name: "Half Legs", duration: "20 min", price: "20 €" },
            { id: 2, name: "Thighs", duration: "20 min", price: "22 €" },
            { id: 3, name: "Three/Four Legs", duration: "25 min", price: "30 €" },
            { id: 4, name: "Full Legs", duration: "30 min", price: "40 €" },
          ]
        },
        {
          id: 5,
          title: "upperbodywax",
          subcategory: [
            { id: 1, name: "Underarms", duration: "15 min", price: "10 €" },
            { id: 2, name: "Stomach", duration: "15 min", price: "10 €" },
            { id: 3, name: "Back", duration: "15 min", price: "15 €" },
          ]
        },
        {
          id: 6,
          title: "ladiespackages",
          subcategory: [
            { id: 1, name: "Combo: Half Legs + Underarms + Extended Bikini", duration: "50 min", price: "50 €" },
            { id: 2, name: "Combo: Half Legs + Underarms + Full Bikini", duration: "55 min", price: "55 €" },
            { id: 3, name: "Combo: Full Legs + Underarms + Full Bikini", duration: "60 min", price: "60 €" },
            { id: 4, name: "Full Body", duration: "N/A", price: "120 €" },
          ]
        },]



      /*facewax: [
        { id: 1, name: "Eyebrows", duration: "15 min", price: "15 €" },
        { id: 2, name: "Forehead", duration: "10 min", price: "10 €" },
        { id: 3, name: "Upper Lip", duration: "10 min", price: "10 €" },
        { id: 4, name: "Chin", duration: "10 min", price: "10 €" },
      ],
      armwax: [
        { id: 1, name: "Half Arm", duration: "15 min", price: "15 €" },
        { id: 2, name: "Full Arm", duration: "20 min", price: "20 €" },
      ],
      bikiniwax: [
        { id: 1, name: "Classic Bikini", duration: "20 min", price: "15 €" },
        { id: 2, name: "Extended Bikini", duration: "25 min", price: "22 €" },
        { id: 3, name: "Full Bikini", duration: "30 min", price: "30 €" },
      ],
      legwax: [
        { id: 1, name: "Half Legs", duration: "20 min", price: "20 €" },
        { id: 2, name: "Thighs", duration: "20 min", price: "22 €" },
        { id: 3, name: "Three/Four Legs", duration: "25 min", price: "30 €" },
        { id: 4, name: "Full Legs", duration: "30 min", price: "40 €" },
      ],
      upperbodywax: [
        { id: 1, name: "Underarms", duration: "15 min", price: "10 €" },
        { id: 2, name: "Stomach", duration: "15 min", price: "10 €" },
        { id: 3, name: "Back", duration: "15 min", price: "15 €" },
      ],
      ladiespackages: [
        { id: 1, name: "Combo: Half Legs + Underarms + Extended Bikini", duration: "50 min", price: "50 €" },
        { id: 2, name: "Combo: Half Legs + Underarms + Full Bikini", duration: "55 min", price: "55 €" },
        { id: 3, name: "Combo: Full Legs + Underarms + Full Bikini", duration: "60 min", price: "60 €" },
        { id: 4, name: "Full Body", duration: "N/A", price: "120 €" },
      ],
    };*/
/*
    if (treatmentsSubcategory && waxTreatments[treatmentsSubcategory && subcategory]) {
      setTreatments(waxTreatments[treatmentsSubcategory, subcategory]);
    } else {
      setTreatments([]);
    }
  }, [treatmentsSubcategory]);

  const handleBookNow = (treatmentName) => {
    navigate(`/treatments/${treatmentsSubcategory}/${treatmentName}`);
  };


  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/treatments");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <h3>{treatmentName}</h3>
        {treatments.length > 0 ? (
          treatments.map((treatment) => (
            <div key={treatment.id} className="treatment-card">
              <h3>{treatment.name}</h3>
              <p>Duration: {treatment.duration}</p>
              <p>Price: {treatment.price}</p>
              <button
                type="button"
                className="book-btn"
                onClick={() => handleBookNow(treatment.name.toLowerCase().replace(/\s/g, "-"))}
              >
                Book Now
              </button>
            </div>
          ))
        ) : (
          <p>No treatments available for this category.</p>
        )}
        <button onClick={handleClose}>Close</button>  
      </div>
    </div>
  );
}
  WaxModal.propTypes = {
    onClose: PropTypes.func,
    subcategory: PropTypes.string,
    title: PropTypes.func,
  };


export default WaxModal;*/
