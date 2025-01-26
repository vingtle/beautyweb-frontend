import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Treatments from "./pages/Treatments";
import BookingSlot from "./pages/BookingSlot";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Payment from "./pages/Payment";
import WaxModal from './components/Treatment Card/Treatment Category/Waxmodal/WaxModal';


/*const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/booking/:treatmentsSubcategory" element={<WaxModal />} />
        <Route path="/booking" element={<BookingSlot />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/booking/:treatmentName/appointements" element={<MyAppointments />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  )
}*/

  const App = () => {
    return (
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/treatments" element={<Treatments />} />
      {/* Waxing with subcategories */}
        <Route path="/booking/:treatmentsSubcategory/:treatmentName" element={<BookingSlot />} />
        <Route path="/booking/:treatmentsSubcategory" element={<WaxModal />} />
      {/* Non-waxing treatments */}
       <Route path="/booking/:treatmentName" element={<BookingSlot />} />
       <Route path="/booking/:treatmentName/appointements" element={<MyAppointments />} />
       <Route path="/myprofile" element={<MyProfile />} />
       <Route path="/payment" element={<Payment />} />
       </Routes>
       <Footer />
      </div>
    )
  }

export default App;