// import React, { useState, useEffect, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import './appointmentpage.css';
// import { AppContext } from '../context/AppContext';
// import { mymi } from '../assets/assets'; // Import treatment data

// const AppointmentPage = () => {
//     const { treatmentName } = useParams();
//     const [availableSlots, setAvailableSlots] = useState([]);
//     const [bookedSlots, setBookedSlots] = useState({});
//     const [selectedSlot, setSelectedSlot] = useState(null);
//     const [weekIndex, setWeekIndex] = useState(0);
//     const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//     const navigate = useNavigate();
//     const { token, backendUrl } = useContext(AppContext);

//     useEffect(() => {
//         if (backendUrl && token) {
//             fetchBookedSlots();
//         }
//     }, [backendUrl, token]);

//     useEffect(() => {
//         if (Object.keys(bookedSlots).length > 0) {
//             fetchAvailableSlots();
//         }
//     }, [bookedSlots]);

//     // Fetch booked slots from API
//     const fetchBookedSlots = async () => {
//         try {
//             const response = await axios.get(`${backendUrl}/api/user/book-appointment`, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setBookedSlots(response.data);
//         } catch (error) {
//             console.error("Error fetching booked slots:", error);
//         }
//     };
    

//     const [treatmentDuration, setTreatmentDuration] = useState(30); // Default duration

//     useEffect(() => {
//         fetchTreatmentName();
//     }, [treatmentName]);
    
//     const fetchTreatmentName = () => {
//         const treatment = mymi.find(t => t.name.toLowerCase() === decodeURIComponent(treatmentName).toLowerCase());
//         if (treatment && treatment.subcategories.length > 0) {
//             setTreatmentDuration(parseInt(treatment.subcategories[0].duration)); // Extract duration from the first subcategory
//         }
//     };
    

//     // Round up time to the next nearest 15, 30, or 60 minutes
//     const roundTime = (date, minutes) => {
//         let ms = 1000 * 60 * minutes; // Convert minutes to milliseconds
//         return new Date(Math.ceil(date.getTime() / ms) * ms);
//     };

//     const fetchAvailableSlots = () => {
//         let today = new Date();
//         let weeks = [];

//         for (let i = 0; i < 52; i++) { // Fetch slots for 52 weeks
//             let weekSlots = [];

//             for (let j = 0; j < 7; j++) { // Each week has 7 days
//                 let currentDate = new Date(today);
//                 currentDate.setDate(today.getDate() + i * 7 + j);

//                 let endTime = new Date(currentDate);
//                 endTime.setHours(21, 0, 0, 0);

//                 currentDate.setHours(9);
//                 currentDate.setMinutes(0);

//                 let dailySlots = [];

//                 while (currentDate < endTime) {
//                     let day = currentDate.getDate();
//                     let month = currentDate.getMonth() + 1;
//                     let year = currentDate.getFullYear();
//                     const slotDate = `${day}/${month}/${year}`;
//                     const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

//                     // Check if the slot is booked
//                     const isSlotAvailable = !(bookedSlots[slotDate] && bookedSlots[slotDate].includes(formattedTime));

//                     if (isSlotAvailable) {
//                         // Calculate the end time of the service based on its duration
//                         let endTime = new Date(currentDate);
//                         endTime.setMinutes(currentDate.getMinutes() + treatmentDuration);

//                         // Ensure the end time is rounded to the next 15, 30, or 60-minute mark
//                         let roundedEndTime = roundTime(endTime, 15);
//                         let endFormattedTime = roundedEndTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

//                         dailySlots.push({
//                             date: slotDate,
//                             day: daysOfWeek[currentDate.getDay()],
//                             time: formattedTime,
//                             endTime: endFormattedTime
//                         });
//                     }

//                     // Move to the next 30-minute slot
//                     currentDate.setMinutes(currentDate.getMinutes() + 30);
//                 }

//                 if (dailySlots.length > 0) {
//                     weekSlots.push(dailySlots);
//                 }
//             }
//             weeks.push(weekSlots);
//         }

//         setAvailableSlots(weeks);
//     };

//     const selectSlot = (slotDate, slotTime) => {
//         setSelectedSlot({ slotDate, slotTime });
//     };

//     const bookAppointment = async () => {
//         if (!token) {
//             toast.warning('Login to book appointment');
//             return navigate('/login');
//         }

//         if (!selectedSlot) {
//             toast.error('Please select a valid slot');
//             return;
//         }

//         try {
//             const { data } = await axios.post(`${backendUrl}/api/user/appointments`, { 
//                 treatmentName, 
//                 slotDate: selectedSlot.slotDate, 
//                 slotTime: selectedSlot.slotTime 
//             }, { 
//                 headers: { Authorization: `Bearer ${token}` } 
//             });

//             if (data.success) {
//                 toast.success(data.message);
//                 navigate('/my-appointments');
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error(error.message);
//         }
//     };

//     return (
//         <div className='appointment-container'>
//             <h2>Booking slots for {treatmentName}</h2>
//             <div className='week-navigation'>
//                 <button onClick={() => setWeekIndex(Math.max(0, weekIndex - 1))}>&lt; Prev</button>
//                 <span>Week {weekIndex + 1}</span>
//                 <button onClick={() => setWeekIndex(Math.min(availableSlots.length - 1, weekIndex + 1))}>Next &gt;</button>
//             </div>
//             <div className='date-picker'>
//                 {availableSlots.length > 0 && availableSlots[weekIndex].map((daySlots, index) => (
//                     <div key={index} className='day-slot' style={{ display: 'grid', marginBottom: '20px' }}>
//                         <h3>{daySlots[0]?.day} - {daySlots[0]?.date}</h3>
//                         <div className='time-slots' style={{ display: 'block', marginTop: '10px' }}>
//                             {daySlots.map((slot, slotIndex) => (
//                                 <button 
//                                     key={slotIndex} 
//                                     className={`time-slot ${selectedSlot?.slotDate === slot.date && selectedSlot?.slotTime === slot.time ? 'selected' : ''}`} 
//                                     onClick={() => selectSlot(slot.date, slot.time)}
//                                 >
//                                     {slot.time} - {slot.endTime || "??:??"} 
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <button className='book-appointment' onClick={bookAppointment}>Book an appointment</button>
//         </div>
//     );
// };

// export default AppointmentPage;


// import React, { useEffect, useState, useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { AppContext } from '../context/AppContext';
// import "./appointmentpage.css";

// const AppointmentPage = () => {
//   const { backendUrl } = useContext(AppContext);
//   const { treatmentName } = useParams(); // ✅ Get treatment name from URL
//   const [treatment, setTreatment] = useState(null);
//   const duration = treatment.subcategories?.[0]?.category?.[0]?.duration || "N/A";


//   useEffect(() => {
//     const fetchTreatment = async () => {
//       try {
//         const encodedTreatmentName = encodeURIComponent(treatmentName);
//         const { data } = await axios.get(`${backendUrl}/api/treatments/${encodedTreatmentName}`);

//         if (data.success) {
//           setTreatment(data.treatment);
//         } else {
//           console.error("❌ Treatment not found:", data.message);
//         }
//       } catch (error) {
//         console.error("❌ Error fetching treatment details:", error);
//       }
//     };

//     if (treatmentName) {
//         fetchTreatment(); // ✅ Fetch treatment when treatmentName is available
//       }
//     }, [treatmentName]);
  
//     if (!treatment) {
//       return <h2>Loading treatment details...</h2>;
//     }
//   return (
//     <div className="appointment-container">
//       {treatment ? (
//         <>
//           <h2>{treatment.name}</h2>
//           <p>{treatment.description}</p>
//           <p>Price: {treatment.price}</p>
//           <p>Duration: {duration}</p>
//           <button className="book-btn">Book an appointment</button>
//         </>
//       ) : (
//         <p>Loading treatment details...</p>
//       )}
//     </div>
//   );
// };

// export default AppointmentPage;


import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import "./appointmentpage.css";

const AppointmentPage = () => {
  const { backendUrl, token } = useContext(AppContext);
  const { treatmentName } = useParams();
  const navigate = useNavigate();
  const [treatment, setTreatment] = useState(null);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Fetch treatment details
  useEffect(() => {
    const fetchTreatment = async () => {
      try {
        console.log(`Fetching: ${backendUrl}/api/treatments/${treatmentName}`);
        const { data } = await axios.get(`${backendUrl}/api/treatments/${treatmentName}`);
  
        if (data.success) {
          console.log("Treatment Data:", data.treatment);
          setTreatment(data.treatment);
        } else {
          console.error("Treatment not found:", data.message);
        }
      } catch (error) {
        console.error("Error fetching treatment details:", error);
      }
    };
  
    if (treatmentName) {
      fetchTreatment();
    }
  }, [treatmentName, backendUrl]);
  
  // Fetch available slots
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/api/treatments/${treatmentName}/slots`);
        if (data.success) {
          setSlots(data.slots);
        }
      } catch (error) {
        console.error("Error fetching slots:", error);
      }
    };

    if (treatmentName) {
      fetchSlots();
    }
  }, [treatmentName, backendUrl]);

  // Handle Booking Process
  const handleBooking = () => {
    if (!selectedSlot) {
      alert("Please select a slot first!");
      return;
    }

    if (!token) {
      navigate("/login", { state: { treatmentName, selectedSlot } });
    } else {
      navigate("/payment", { state: { treatmentName, selectedSlot } });
    }
  };

  if (!treatment) {
    return <h2>Loading treatment details...</h2>;
  }

  return (
    <div className="appointment-container">
      <h2>Available Slots for {treatment.name}</h2>
      <p>Description: {treatment.description}</p>
      <p>Price: ${treatment.price}</p>
      <p>Duration: {treatment.duration} minutes</p>

      <div className="slots">
        {slots.length > 0 ? (
          slots.map((slot, index) => (
            <button
              key={index}
              className={`slot-btn ${selectedSlot === slot ? "selected" : ""}`}
              onClick={() => setSelectedSlot(slot)}
            >
              {slot.date} - {slot.time}
            </button>
          ))
        ) : (
          <p>No slots available</p>
        )}
      </div>

      <button className="confirm-btn" onClick={handleBooking} disabled={!selectedSlot}>
        Book an Appointment
      </button>
    </div>
  );
};

export default AppointmentPage;
