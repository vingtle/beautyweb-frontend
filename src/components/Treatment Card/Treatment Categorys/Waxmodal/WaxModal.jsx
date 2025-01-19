import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./waxmodal.css";

const WaxModal = ({ category, title, onClose }) => {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {

    const mockTreatments = {
        armwax: [
                { id: 1, name: "Half Arm", duration: "15 min", price: "15 €"},
                { id: 2, name: "Full Arm", duration: "20 min", price: "20 €"},],
        bikiniwax: [
                { id: 1, name: "Classic Bikini", duration: "20 min", price: "15 €" },
                { id: 2, name: "Extended Bikini", duration: "25 min", price: "22 €" },
                { id: 3, name: "Full Bikini", duration: "30 min", price: "30 €" },],
        facewax: [
                { id: 1, name: "Eyebrows", duration: "15 min", price: "15 €" },
                { id: 2, name: "Forehead", duration: "10 min", price: "10 €" },
                { id: 3, name: "Upper Lip", duration: "10 min", price: "10 €" },
                { id: 4, name: "Chin", duration: "10 min", price: "10 €" },],
        legwax: [
                { id: 1, name: "Half Legs", duration: "20 min", price: "20 €" },
                { id: 2, name: "Thighs", duration: "20 min", price: "22 €" },
                { id: 3, name: "Three/Four Legs", duration: "25 min", price: "30 €" },
                { id: 4, name: "Full Legs", duration: "30 min", price: "40 €" },],
        upperbodywax: [
                { id: 1, name: "Underarms", duration: "15 min", price: "10 €" },
                { id: 2, name: "Stomach", duration: "15 min", price: "10 €" },
                { id: 3, name: "Back", duration: "15 min", price: "15 €" },],
        facepakages: [
                { id: 1, name: "Face - 2 Zones (Eyebrows + 1 area)", duration: "20 min", price: "22 €" },
                { id: 2, name: "Face - 3 Zones", duration: "25 min", price: "33 €" },
                { id: 3, name: "Full Face", duration: "N/A", price: "50 €" },],
        ladiespackages: [
                { id: 1, name: "Combo: Half Legs + Underarms + Extended Bikini", duration: "50 min", price: "50 €" },
                { id: 2, name: "Combo: Half Legs + Underarms + Full Bikini", duration: "55 min", price: "55 €" },
                { id: 3, name: "Combo: Full Legs + Underarms + Full Bikini", duration: "60 min", price: "60 €" },
                { id: 4, name: "Full Body", duration: "N/A", price: "120 €" },
              ],};

    setTreatments(mockTreatments[category]) || ([]);
  }, [category]);

  /*const [isAuthenticated, setIsAuthenticated] = useState(false); // New state for auth
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  
    const fetchTreatments = async () => {
      try {
        const response = await fetch(`/api/treatments?category=${category}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            console.error("Unauthorized! Redirecting to login.");
            navigate("/login");
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        }

        const data = await response.json();
        setTreatments(data);
      } catch (error) {
        console.error(
          `Failed to fetch treatments for category ${category}:`,
          error
        );
      }
    };

    fetchTreatments();
  }, [category]);

  const handleBookNow = (treatmentName) => {
    if (!isAuthenticated) {
      alert("Please log in to book this treatment.");
      navigate("/login");
    } else {
      navigate(`/booking/${treatmentName.toLowerCase().replace(/\s/g, "-")}`);
    }
  };*/

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        {treatments.length > 0 ? (
          treatments.map((treatment) => (
            <div key={treatment.id} className="treatment-card">
              <h3>{treatment.name}</h3>
              <p>Duration: {treatment.duration_minutes} minutes</p>
              <p>Price: {treatment.price} €</p>
              <p>{treatment.description}</p>
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
        <button type="button" className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

WaxModal.propTypes = {
    title: PropTypes.string.isRequired,
    treatments: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    })
    ).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WaxModal;
