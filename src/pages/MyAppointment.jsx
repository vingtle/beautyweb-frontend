// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useAppContext } from '../context/AppContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { assets } from '../assets/assets'

// const MyAppointments = () => {

//     const { backendUrl, token, userData } = useAppContext();
//     const navigate = useNavigate()

//     const [appointments, setAppointments] = useState([])
//     const [payment, setPayment] = useState('')

//     const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//     // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
//     const slotDateFormat = (slotDate) => {
//         const dateArray = slotDate.split('_')
//         return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
//     }

//     if (!token) {
//       console.log("Token is missing, not making API call.");
//       return;
//   }
  
//     // Getting User Appointments Data Using API
//     const getUserAppointments = async () => {
//         try {
//             if (!userData || !userData._id) {
//              console.error('userId is missing');
//              return;
//             }
//            console.log('Fetching Appointments for userId:", userData._id');

//             const { data } = await axios.get(`${backendUrl}/api/user/my-appointments`, {
//               headers: { Authorization: `Bearer ${token}` },
//                params: { userId: userData._id },  
//            });
            
//              console.log("Appointments Response:", data);
          
//              if (data.success) {
//               setAppointments(data.appointments.reverse()); 
//         } else {
//          toast.error(data.message);
//         }
//        } catch (error) {
//             console.log(error)
//             toast.error(error.response?.data?.message || "Error fetching appointments");
//   }
//     };

//     // Function to cancel appointment Using API
//     const cancelAppointment = async (appointmentId) => {

//         try {

//             const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })

//             if (data.success) {
//                 toast.success(data.message)
//                 getUserAppointments()
//             } else {
//                 toast.error(data.message)
//             }

//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }

//     }

//     const initPay = (order) => {
//         const options = {
//             key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//             amount: order.amount,
//             currency: order.currency,
//             name: 'Appointment Payment',
//             description: "Appointment Payment",
//             order_id: order.id,
//             receipt: order.receipt,
//             handler: async (response) => {

//                 console.log(response)

//                 try {
//                     const { data } = await axios.post(backendUrl + "/api/user/verifyRazorpay", response, { headers: { token } });
//                     if (data.success) {
//                         navigate('/my-appointments')
//                         getUserAppointments()
//                     }
//                 } catch (error) {
//                     console.log(error)
//                     toast.error(error.message)
//                 }
//             }
//         };
//         const rzp = new window.Razorpay(options);
//         rzp.open();
//     };

//     // Function to make payment using razorpay
//     const appointmentRazorpay = async (appointmentId) => {
//         try {
//             const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } })
//             if (data.success) {
//                 initPay(data.order)
//             }else{
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }

//     // Function to make payment using stripe
//     const appointmentStripe = async (appointmentId) => {
//         try {
//             const { data } = await axios.post(backendUrl + '/api/user/payment-stripe', { appointmentId }, { headers: { token } })
//             if (data.success) {
//                 const { session_url } = data
//                 window.location.replace(session_url)
//             }else{
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }



//     useEffect(() => {
//         if (token) {
//             getUserAppointments();
//         }
//     }, [token, userData]);  
    

//     return (
//         <div>
//             <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b'>My appointments</p>
//             <div className=''>
//                 {appointments.map((item, index) => (
//                     <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
//                         <div>
//                             <img className='w-36 bg-[#EAEFFF]' src={item.treatmentData} alt="" />
//                         </div>
//                         <div className='flex-1 text-sm text-[#5E5E5E]'>
//                             <p className='text-[#262626] text-base font-semibold'>{item.treatmentData.name}</p>
//                             <p>{item.treatmentData}</p>
//                             <p className=' mt-1'><span className='text-sm text-[#3C3C3C] font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)} |  {item.slotTime}</p>
//                         </div>
//                         <div></div>
//                         <div className='flex flex-col gap-2 justify-end text-sm text-center'>
//                             {!item.cancelled && !item.payment && !item.isCompleted && payment !== item._id && <button onClick={() => setPayment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>}
//                             {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && <button onClick={() => appointmentStripe(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'><img className='max-w-20 max-h-5' src={assets.stripe_logo} alt="" /></button>}
//                             {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && <button onClick={() => appointmentRazorpay(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'><img className='max-w-20 max-h-5' src={assets.razorpay_logo} alt="" /></button>}
//                             {!item.cancelled && item.payment && !item.isCompleted && <button className='sm:min-w-48 py-2 border rounded text-[#696969]  bg-[#EAEFFF]'>Paid</button>}

//                             {item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>}

//                             {!item.cancelled && !item.isCompleted && <button onClick={() => cancelAppointment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>}
//                             {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment cancelled</button>}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default MyAppointments


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const MyAppointments = () => {
    const { backendUrl, token, userData } = useAppContext();
    const [appointments, setAppointments] = useState([]);

    // Fetch User Appointments
    const getUserAppointments = async () => {
        try {
            if (!userData || !userData._id) {
                console.log("User data not available");
                return;
            }
            const { data } = await axios.get(
                `${backendUrl}/api/user/my-appointments?userId=${userData._id}`, 
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (data.success) {
                setAppointments(data.appointments.reverse());
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error("Error fetching appointments:", error);
            toast.error(error.response?.data?.message || "Error fetching appointments");
        }
    };

    // // Cancel Appointment
    // const cancelAppointment = async (appointmentId) => {
    //     try {
    //         const { data } = await axios.post(
    //             `${backendUrl}/api/user/cancel-appointment`, 
    //             { appointmentId }, 
    //             { headers: { Authorization: `Bearer ${token}` } }
    //         );

    //         if (data.success) {
    //             toast.success(data.message);
    //             getUserAppointments(); // Refresh the list after canceling
    //         } else {
    //             toast.error(data.message);
    //         }
    //     } catch (error) {
    //         console.error("Error cancelling appointment:", error);
    //         toast.error(error.response?.data?.message || "Error cancelling appointment");
    //     }
    // };

    useEffect(() => {
        if (token && userData) {
            getUserAppointments();
        }
    }, [token, userData]);  // Fetch data when token or userData changes

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">My Appointments</h2>
            {appointments.length > 0 ? (
                appointments.map((appointment) => (
                    <div key={appointment._id} className="border p-4 mb-4">
                        <p><strong>{appointment.treatmentData.name}</strong></p>
                        <p>Date: {appointment.slotDate} | Time: {appointment.slotTime}</p>
                        {!appointment.cancelled && (
                            <button 
                                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                                onClick={() => cancelAppointment(appointment._id)}
                            >
                                Cancel Appointment
                            </button>
                        )}
                    </div>
                ))
            ) : (
                <p>No appointments found.</p>
            )}
        </div>
    );
};

export default MyAppointments;
