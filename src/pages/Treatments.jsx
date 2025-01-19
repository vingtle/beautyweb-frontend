import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import TreatmentsDropdown from "../components/Treatment Card/TreatmentsDropdown";
import TreatmentCard from "../components/Treatment Card/TreatmentCard"; // Import TreatmentCard
import "./treatments.css";

const Treatments = () => {
  const { treatmentCategories } = useContext(AppContext);

  return (
    <div className="treatments-page">
      <div className="left-sidebar">
        <button
          type="button"
          className="btn-dropdown"
          onClick={() => console.log("Open Treatments Dropdown")}
        >
          All Treatments
        </button>
        <TreatmentsDropdown />
      </div>
      <div className="main-content">
        <h2>All Treatments</h2>
        <div className="treatments-grid">
            {treatmentCategories.map((category) => (
            <div key={category.id} className="treatment-category">
            <h3>{category.name}</h3>
            {category.treatments && typeof category.treatments === "object" ? (
                category.treatments // Render the Waxing component or others directly
            ) : (
            <div className="treatment-items">
            {category.treatments?.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
            )) || <p>No treatments available.</p>}
        </div>
        )}
        </div>
        ))}
        </div>
        </div>
      </div>
  );
};

export default Treatments;
