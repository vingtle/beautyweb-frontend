// import axios from 'axios';
// import React, { useContext, useEffect } from 'react'
// import { useNavigate, useSearchParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext';
// import { toast } from 'react-toastify';

// const Payment = () => {

//     const [searchParams] = useSearchParams()
//     const success = searchParams.get("success")
//     const appointmentId = searchParams.get("appointmentId")

//     const { backendUrl, token, userData } = useContext(AppContext)

//     const navigate = useNavigate()

//     // Function to verify stripe payment
//     const verifyStripe = async () => {

//         try {
//           console.log("Verifying Stripe Payment with:", { success, appointmentId });

//             const { data } = await axios.post(
//               backendUrl + "/api/user/verifyStripe", 
//               { success, appointmentId }, 
//               { headers: { Authorization: `Bearer ${token}` } }
//             );
// console.log("Stripe Verification Response:", data);

//             if (data.success) {
//                 toast.success(data.message)
//             } else {
//                 toast.error(data.message)
//             }

//             navigate("/my-appointments")

//         } catch (error) {
//             toast.error(error.message)
//             console.error("Error verifying Stripe payment:", error.response ? error.response.data : error);
//         }

//     }

//     // useEffect(() => {
//     //     console.log("Payment Page Loaded");
//     //     console.log("User Data:", userData);
//     //     console.log("Token:", token);
//     //     console.log("Query Params - success:", success, "appointmentId:", appointmentId);

//     //     if (token && appointmentId && success) {
//     //       console.log("Calling verifyStripe()...");

//     //         verifyStripe()
//     //     } else {
//     //       console.log("Missing parameters, not verifying payment.");

//     //     }
//     // }, [token, appointmentId, success]);
    

//     useEffect(() => {
//       console.log("Payment Page Loaded");
//       console.log("User Data:", userData);
//       console.log("Token:", token);
//       console.log("Query Params - success:", success, "appointmentId:", appointmentId);
  
//       if (!success) console.error("Missing 'success' parameter in URL");
//       if (!appointmentId) console.error("Missing 'appointmentId' parameter in URL");
  
//       if (token && appointmentId && success) {
//           console.log("Calling verifyStripe()...");
//           verifyStripe();
//       } else {
//           console.warn("Missing parameters, not verifying payment.");
//       }
//   }, [token, appointmentId, success, userData]);
  
//     return (
//       <div className='min-h-[60vh] flex items-center justify-center'>
//           <p className="text-lg text-gray-500">Processing payment...</p>
//           <div className="w-20 h-20 border-4 border-gray-300 border-t-4 border-t-primary rounded-full animate-spin"></div>
//       </div>
//   );
  
// }

// export default Payment;

// import { useEffect, useContext } from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const Payment = () => {
//     const [searchParams] = useSearchParams();
//     const success = searchParams.get("success");
//     const appointmentId = searchParams.get("appointmentId");

//     const { backendUrl, token, userData } = useContext(AppContext);
//     const navigate = useNavigate();

//     console.log("✅ Payment Page Loaded");
//     console.log("🔍 Query Params - success:", success, "appointmentId:", appointmentId);
//     console.log("👤 User Data:", userData);
//     console.log("🔑 Token:", token);

//     // Function to verify payment
//     const verifyStripe = async () => {
//         if (!success || !appointmentId) {
//             console.error("🚨 Missing parameters, not verifying payment.");
//             return;
//         }

//         try {
//             console.log("🔄 Verifying Stripe payment...");
//             const { data } = await axios.post(
//                 `${backendUrl}/api/user/verifyStripe`,
//                 { success, appointmentId },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );

//             console.log("✅ Stripe Verification Response:", data);

//             if (data.success) {
//                 toast.success(data.message);
//                 navigate("/my-appointments"); // Redirect to appointments after success
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             console.error("❌ Error verifying Stripe payment:", error);
//             toast.error(error.message);
//         }
//     };

//    useEffect(() => {
//     if (!success || !appointmentId) {
//         console.log("🚨 Missing parameters, not verifying payment.");
//         return;
//     }

//     if (!token) {
//         console.log("🚨 Token is missing, waiting for authentication.");
//         return;
//     }

//     if (!userData) {
//         console.log("🚨 User Data not available yet, waiting...");
//         return;
//     }

//     verifyStripe();
// }, [token, success, appointmentId, userData]); 

  

//     return (
//         <div className='min-h-[60vh] flex items-center justify-center'>
//             <p>Processing payment...</p>
//         </div>
//     );
// };

// export default Payment;


import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Payment = () => {
    const { backendUrl, token, userData } = useAppContext();
    const [appointments, setAppointments] = useState([]);
    const [payment, setPayment] = useState('');
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const success = searchParams.get("success");
        const appointmentId = searchParams.get("appointmentId");

        if (success === "true" && appointmentId) {
            toast.success("Payment successful!");
            navigate('/my-appointments');
        } else if (success === "false" && appointmentId) {
            toast.error("Payment failed. Please try again.");
        }
    }, [searchParams, navigate]);

    // Fetch User Appointments
    const getUserAppointments = async () => {
        if (!token || !userData?._id) {
            toast.error("User not authenticated");
            return;
        }
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/my-appointments?userId=${userData._id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAppointments(data.appointments.reverse());
        } catch (error) {
            console.log(error);
            toast.error("Error fetching appointments");
        }
    };

    // Function to cancel appointment
    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/user/cancel-appointment`, { appointmentId }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (data.success) {
                toast.success(data.message);
                getUserAppointments();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Error cancelling appointment");
        }
    };

    // Initialize Razorpay Payment
    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Appointment Payment',
            description: "Appointment Payment",
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                console.log(response);
                try {
                    const { data } = await axios.post(`${backendUrl}/api/user/verifyRazorpay`, response, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    if (data.success) {
                        toast.success("Payment successful!");
                        navigate('/my-appointments');
                        getUserAppointments();
                    }
                } catch (error) {
                    console.log(error);
                    toast.error(error.response?.data?.message || "Payment verification failed");
                }
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    // Function to make payment using Razorpay
    const appointmentRazorpay = async (appointmentId) => {
        try {
            if (!token) {
                toast.error("Authentication required. Please login again.");
                return;
            }

            const { data } = await axios.post(`${backendUrl}/api/user/payment-razorpay`, { appointmentId }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (data.success) {
                initPay(data.order);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Error initiating Razorpay payment");
        }
    };

    // Function to make payment using Stripe
    const appointmentStripe = async (appointmentId) => {
        try {
            if (!token) {
                toast.error("Authentication required. Please login again.");
                return;
            }

            const { data } = await axios.post(`${backendUrl}/api/user/payment-stripe`, { appointmentId }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (data.success) {
                window.location.replace(data.session_url);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Error initiating Stripe payment");
        }
    };

    useEffect(() => {
        if (token && userData?._id) {
            console.log("Fetching appointments for:", userData._id);
            getUserAppointments();
        } else {
            console.log("User data not available yet, waiting...");
        }
    }, [token, userData]);
    

    return (
        <div>
            <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b'>My appointments</p>
            <div>
                {appointments.length > 0 ? (
                    appointments.map((item, index) => (
                        <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
                            <div>
                                <img className='w-36 bg-[#EAEFFF]' src={item.treatmentData.image} alt={item.treatmentData.name} />
                            </div>
                            <div className='flex-1 text-sm text-[#5E5E5E]'>
                                <p className='text-[#262626] text-base font-semibold'>{item.treatmentData.name}</p>
                                <p>{item.treatmentData.description}</p>
                                <p className=' mt-1'><span className='text-sm text-[#3C3C3C] font-medium'>Date & Time:</span> {item.slotDate} | {item.slotTime}</p>
                            </div>
                            <div className='flex flex-col gap-2 justify-end text-sm text-center'>
                                {!item.cancelled && !item.payment && !item.isCompleted && payment !== item._id && (
                                    <button onClick={() => setPayment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
                                )}
                                {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && (
                                    <button onClick={() => appointmentStripe(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'>
                                        <img className='max-w-20 max-h-5' src={assets.stripe_logo} alt="Stripe" />
                                    </button>
                                )}
                                {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && (
                                    <button onClick={() => appointmentRazorpay(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'>
                                        <img className='max-w-20 max-h-5' src={assets.razorpay_logo} alt="Razorpay" />
                                    </button>
                                )}
                                {!item.cancelled && item.payment && !item.isCompleted && (
                                    <button className='sm:min-w-48 py-2 border rounded text-[#696969] bg-[#EAEFFF]'>Paid</button>
                                )}
                                {item.isCompleted && (
                                    <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>
                                )}
                                {!item.cancelled && !item.isCompleted && (
                                    <button onClick={() => cancelAppointment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>
                                )}
                                {item.cancelled && !item.isCompleted && (
                                    <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment cancelled</button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No appointments found.</p>
                )}
            </div>
        </div>
    );
};

export default Payment;
