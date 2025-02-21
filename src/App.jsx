// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import MyProfile from "./pages/MyProfile";
// import Payment from "./pages/Payment";
// import TreatmentPage from './pages/TreatmentPage';
// import AppointmentPage from './pages/AppointementPage';

// const App = () => {
//     return (
//       <div>
//         <Navbar />
//         <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/treatments" element={<TreatmentPage />} />
//         <Route path="/appointment/:treatmentName" element={<AppointmentPage />} />
//         <Route path="/myprofile" element={<MyProfile />} />
//         <Route path="/payment" element={<Payment />} />
//        </Routes>
//        <Footer />
//       </div>
//     )
//   }

// export default App;


// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import MyProfile from "./pages/MyProfile";
// import BookingSlot from "./pages/BookingSlot";
// import Payment from "./pages/Payment";
// //import Appointment from "./pages/Appointment";
// import TreatmentPage from "./pages/TreatmentPage";
// import AppointmentPage from "./pages/AppointmentPage";
// import { ProtectedRoute } from "./context/AppContext"; 
// import MyAppointment from "./pages/MyAppointment";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/treatments" element={<TreatmentPage />} />
//         <Route path="/appointment/:treatmentName" element={<AppointmentPage />} />

//         {/* Protected Routes */}
//         <Route path="/myprofile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
//         <Route path="/booking/:treatmentName/*" element={<ProtectedRoute><BookingSlot /></ProtectedRoute>} />
//         <Route path="appointment" element={<MyAppointment />} />
       
//         <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import TreatmentPage from "./pages/TreatmentPage";
import AppointmentPage from "./pages/AppointmentPage";
import Payment from "./pages/Payment";
import { AppContext, ProtectedRoute } from "./context/AppContext";
import MyAppointments from "./pages/MyAppointment";

const App = () => {
  const { token } = useContext(AppContext);
  const navigate = useNavigate();

  // Redirect to login if not authenticated when trying to book or pay
  useEffect(() => {
    const protectedRoutes = ["/booking", "/payment"];
    if (!token && protectedRoutes.includes(window.location.pathname)) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <div>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/treatments" element={<TreatmentPage />} />
        <Route path="/appointment/:treatmentName" element={<AppointmentPage />} />

        {/* Protected Routes - Require Login */}
        <Route path="/myprofile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
        <Route path="/my-appointments" element={<ProtectedRoute><MyAppointments /></ProtectedRoute>} />
        <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

