import React from "react";
import AdvancedSkincare from "../components/Treatment Card/Treatment Category/AdvancedSkincare";
import LuxuryHair from "../components/Treatment Card/Treatment Category/Luxuryhair";
import Massages from "../components/Treatment Card/Treatment Category/Massages";
import ManicuresPedicures from "../components/Treatment Card/Treatment Category/ManicuresPedicures";
import Waxing from "../components/Treatment Card/Treatment Category/Waxing";
import Eyelash from "../components/Treatment Card/Treatment Category/Eyeslash";
import "./treatments.css";

const Treatments = () => {
  const treatmentCategories = [
    {
      id: 1,
      name: "Waxing",
      component: <Waxing />,
    },
    {
      id: 2,
      name: "Advanced Skincare",
      component: <AdvancedSkincare />,
    },
    {
      id: 3,
      name: "Manicures & Pedicures",
      component: <ManicuresPedicures />,
    },
    {
      id: 4,
      name: "Massages",
      component: <Massages />,
    },
    {
      id: 5,
      name: "Luxury Hair",
      component: <LuxuryHair />,
    },
    {
      id: 6,
      name: "EyeLash Extentions",
      component: <Eyelash />,
    },
  ];

  return (
    <div className="treatments-page">
      <div className="main-content">
        <div className="treatments-grid">
          {treatmentCategories.map((category) => (
            <div key={category.id} className="treatment-category">
              {category.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Treatments;



