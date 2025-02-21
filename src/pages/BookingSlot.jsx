// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import FullCalendar from "@fullcalendar/react";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import { treatments } from "../components/Treatment Card/Treatment Category/Waxmodal/dataTreatments";
// import "./BookingSlot.css";

// const BookingSlot = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);

//   const { treatmentName, treatmentsSubcategory } = useParams();
//   const navigate = useNavigate();

//   const parseDuration = (duration) => {
//     const [hours, minutes] = duration
//       .split(/[hmin\s]+/)
//       .filter((val) => val)
//       .map(Number);
//     return (hours || 0) * 60 + (minutes || 0); // Convert to total minutes
//   };
  

//   const getDurationForTreatment = () => {
//     const subcategoryKey = treatmentsSubcategory?.toLowerCase()?.trim();
//     const treatmentKey = treatmentName?.toLowerCase()?.trim();
  
//     if (!treatments[subcategoryKey]) {
//       console.error(`Subcategory not found: ${treatmentsSubcategory}`);
//       return null;
//     }
//     const treatment = treatments[subcategoryKey].find(
//       (t) => t.name.toLowerCase().trim() === treatmentKey
//     );
//     if (!treatment) {
//       console.error(`Treatment not found: ${treatmentName}`);
//       return null;
//     }
//     console.log("Found Treatment:", treatment);
//     return parseDuration(treatment.duration);
//   };
  
//   console.log("Treatments Data:", treatments);
//   console.log("Keys in Treatments:", Object.keys(treatments));
//   console.log("Subcategory:", treatmentsSubcategory);
//   console.log("Treatment Name:", treatmentName);
  
//   const durationInMinutes = getDurationForTreatment() || 0;

// const generateMockSlots = () => {
//   const today = new Date();
//   const mockEvents = [];
//   for (let i = 0; i < 30; i++) {
//     const date = new Date(today);
//     date.setDate(today.getDate() + i);
//     for (let hour = 9; hour < 22; hour++) {
//       for (let minutes of [0, 15, 30, 45]) {
//         const startTime = new Date(date.setHours(hour, minutes, 0));
//         const endTime = new Date(startTime.getTime() + durationInMinutes * 60 * 1000);
//         mockEvents.push({
//           title: `${startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${endTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} Available`,
//           start: startTime.toISOString(),
//           end: endTime.toISOString(),
//         });
//       }
//     }
//   }
//   return mockEvents;
// };


//   useEffect(() => {
//     setEvents(generateMockSlots());
//   }, [durationInMinutes]);

//   // Handle event click
//   const handleEventClick = (info) => {
//     setSelectedSlot({
//       title: info.event.title,
//       start: info.event.start,
//       end: info.event.end,
//     });
//   };

//   // Handle booking confirmation
//   const handleConfirmBooking = () => {
//     const bookingDetails = {
//       treatment: treatmentName,
//       slot: selectedSlot,
//     };
//     navigate("/login", { state: bookingDetails });
//   };

//   return (
//     <div className="booking-slot-container">
//       <h1 className="booking-title">
//         Booking Slots for {treatmentName?.toUpperCase() || treatmentsSubcategory?.toUpperCase()}
//       </h1>
//       <FullCalendar
//         plugins={[timeGridPlugin, interactionPlugin]}
//         initialView="timeGridWeek"
//         headerToolbar={{
//           left: "prev,next today",
//           center: "title",
//           right: "timeGridDay,timeGridWeek",
//         }}
//         slotDuration="00:60:00"
//         slotMinTime="09:00:00"
//         slotMaxTime="22:00:00"
//         allDaySlot={false}
//         events={events}
//         eventClick={handleEventClick}
//       />
//       {selectedSlot && (
//         <div className="selected-slot">
//           <h2>Selected Slot</h2>
//           <p>
//             <strong>Date:</strong>{" "}
//             {new Date(selectedSlot.start).toLocaleDateString()} <br />
//             <strong>Time:</strong>{" "}
//             {new Date(selectedSlot.start).toLocaleTimeString()} -{" "}
//             {new Date(selectedSlot.end).toLocaleTimeString()}
//           </p>
//           <button className="confirm-btn" onClick={handleConfirmBooking}>
//             Confirm & Pay
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingSlot;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios"; 
import { treatments } from "../components/Treatment Card/Treatment Category/Waxmodal/dataTreatments";
import "./BookingSlot.css";

const BookingSlot = () => {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]); 
  const { treatmentName, treatmentsSubcategory } = useParams();
  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_BACKEND_URL; 

  useEffect(() => {
    const fetchBookedSlots = async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/api/user/book-slots`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        if (data.success) {
          setBookedSlots(data.slots); 
        }
      } catch (error) {
        console.error("Error fetching booked slots:", error);
      }
    };

    fetchBookedSlots();
  }, []);

  const parseDuration = (duration) => {
    const [hours, minutes] = duration
      .split(/[hmin\s]+/)
      .filter((val) => val)
      .map(Number);
    return (hours || 0) * 60 + (minutes || 0);
  };

  const getDurationForTreatment = () => {
    const subcategoryKey = treatmentsSubcategory?.toLowerCase()?.trim();
    const treatmentKey = treatmentName?.toLowerCase()?.trim();

    if (!treatments[subcategoryKey]) return null;

    const treatment = treatments[subcategoryKey].find(
      (t) => t.name.toLowerCase().trim() === treatmentKey
    );

    return treatment ? parseDuration(treatment.duration) : null;
  };

  const durationInMinutes = getDurationForTreatment() || 0;

  const generateAvailableSlots = () => {
    const today = new Date();
    const availableSlots = [];

    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      for (let hour = 9; hour < 22; hour++) {
        for (let minutes of [0, 15, 30, 45]) {
          const startTime = new Date(date.setHours(hour, minutes, 0));
          const endTime = new Date(startTime.getTime() + durationInMinutes * 60 * 1000);

          const slotString = `${date.toISOString().split("T")[0]}-${startTime.getHours()}:${startTime.getMinutes()}`;

          if (!bookedSlots.includes(slotString)) {
            availableSlots.push({
              title: `${startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${endTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} Available`,
              start: startTime.toISOString(),
              end: endTime.toISOString(),
            });
          }
        }
      }
    }
    return availableSlots;
  };

  useEffect(() => {
    setEvents(generateAvailableSlots());
  }, [durationInMinutes, bookedSlots]); 

  const handleEventClick = (info) => {
    setSelectedSlot({
      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
    });
  };

  const handleConfirmBooking = () => {
    const bookingDetails = {
      treatment: treatmentName,
      slot: selectedSlot,
    };
    navigate("/login", { state: bookingDetails });
  };

  return (
    <div className="booking-slot-container">
      <h1 className="booking-title">
        Booking Slots for {treatmentName?.toUpperCase() || treatmentsSubcategory?.toUpperCase()}
      </h1>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridDay,timeGridWeek",
        }}
        slotDuration="00:60:00"
        slotMinTime="09:00:00"
        slotMaxTime="22:00:00"
        allDaySlot={false}
        events={events}
        eventClick={handleEventClick}
      />
      {selectedSlot && (
        <div className="selected-slot">
          <h2>Selected Slot</h2>
          <p>
            <strong>Date:</strong> {new Date(selectedSlot.start).toLocaleDateString()} <br />
            <strong>Time:</strong> {new Date(selectedSlot.start).toLocaleTimeString()} -{" "}
            {new Date(selectedSlot.end).toLocaleTimeString()}
          </p>
          <button className="confirm-btn" onClick={handleConfirmBooking}>
            Confirm & Pay
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingSlot;
