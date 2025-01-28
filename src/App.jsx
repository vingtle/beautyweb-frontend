import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Treatments from "./pages/Treatments";
import BookingSlot from "./pages/BookingSlot";
import MyProfile from "./pages/MyProfile";
import Payment from "./pages/Payment";
import Appointment from './pages/Appointment';
import Waxing from './components/Treatment Card/Treatment Category/Waxing';





  const App = () => {
    return (
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/booking" element={<Waxing />} />

      {/* Waxing with subcategories */}
        <Route path="/booking/:treatmentsSubcategory/:treatmentName" element={<BookingSlot />} />
        <Route path="/booking/:treatmentsSubcategory" element={<BookingSlot />} />
      {/* Non-waxing treatments */}
       <Route path="/booking/:treatmentName" element={<BookingSlot />} />
       <Route path="/booking/:treatmentName/appointment" element={<Appointment />} />
       <Route path="/myprofile" element={<MyProfile />} />
       <Route path="/payment" element={<Payment />} />
       </Routes>
       <Footer />
      </div>
    )
  }

export default App;