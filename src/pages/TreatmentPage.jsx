// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { mymi } from '../assets/assets'; // Import treatment data
// import "./treatmentpage.css";

// const normalizeName = (name) => name.toLowerCase().replace(/\s+|&/g, "");

// const TreatmentPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="treatment-container">
//       {mymi.map((treatment, index) => {
//         const matchedTreatment = mymi.find(m => normalizeName(m.name) === normalizeName(treatment.name)) || { subcategories: [] };
//         return (
//           <div key={index} className="treatment-category">
//             <h2>{treatment.name}</h2>
//             <div className="subcategories">
//               {matchedTreatment.subcategories.length > 0 ? (
//                 matchedTreatment.subcategories.map((subcategory, subIndex) => (
//                   <div key={subIndex} className="subcategory-card">
//                     <h3>{subcategory.name}</h3>
//                     {subcategory.description && <p className="description">{subcategory.description}</p>}
//                     {subcategory.duration && <p>Duration: {subcategory.duration}</p>}
//                     <p>{subcategory.price}</p>
//                     {treatment.name !== "Waxing" && (
//                       <button 
//                         className="book-btn" 
//                         onClick={() => navigate(`/appointment/${encodeURIComponent(subcategory.name)}`)}
//                       >
//                         Book Now
//                       </button>
//                     )}
//                     <div className="services">
//                       {subcategory.category && subcategory.category.length > 0 ? (
//                         subcategory.category.map((service, serviceIndex) => (
//                           <div key={serviceIndex} className="service-card">
//                             <p>{service.name}</p>
//                             <p>Duration: {service.duration}</p>
//                             <p>{service.price}</p>
//                             <button 
//                               className="book-btn" 
//                               onClick={() => navigate(`/appointment/${encodeURIComponent(service.name)}`)}
//                             >
//                               Book Now
//                             </button>
//                           </div>
//                         ))
//                       ) : (
//                         <p>No services available.</p>
//                       )}
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="no-subcategories">No subcategories available for {treatment.name}.</p>
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default TreatmentPage;

import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; 
import "./treatmentpage.css";

const TreatmentPage = () => {
  
  const { treatments, getTreatmentsData } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    getTreatmentsData(); 
  }, [getTreatmentsData]); 
  console.log("Treatments in page:", treatments);

  return (
    <div className="treatment-container">
      {treatments.length > 0 ? (
        treatments.map((treatment, index) => (
          <div key={index} className="treatment-category">
            <h2>{treatment.name}</h2>
            <div className="subcategories">
              {treatment.subcategories.length > 0 ? (
                treatment.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex} className="subcategory-card">
                    <h3>{subcategory.name}</h3>
                    {subcategory.description && <p className="description">{subcategory.description}</p>}
                    <p>{subcategory.price}</p>

                    <button 
                      className="book-btn" 
                      onClick={() => navigate(`/appointment/${encodeURIComponent(treatment.name)}`)}
          >
                      Book Now
                    </button>

                    {subcategory.category && subcategory.category.length > 0 && (
                      <div className="services">
                        {subcategory.category.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="service-card">
                            <p><strong>{service.name}</strong></p>
                            <p>Duration: {service.duration}</p>
                            <p>Price: {service.price}</p>
                            {/* ✅ Book Now button for individual services */}
                            <button 
                              className="book-btn" 
                              onClick={() => navigate(`/appointment/${encodeURIComponent(treatment.name)}`)}
          >
                              Book Now
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>No subcategories available for {treatment.name}.</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>Loading treatments...</p> 
      )}
    </div>
  );
};

export default TreatmentPage;
