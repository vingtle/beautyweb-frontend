import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Navigate } from 'react-router-dom';

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const ProtectedRoute = ({ children }) => {
  const { token } = useAppContext();
  return token ? children : <Navigate to="/login" />;
};

const AppContextProvider = ({ children }) => {
  const currencySymbol = '€'
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log("Loaded Backend URL:", backendUrl);

  const [token, setToken] = useState(localStorage.getItem('token') || '');
  console.log("Current Token in Context:", token);

  const [userData, setUserData] = useState(null);
  const [treatments, setTreatments] = useState([]); 

  const getTreatmentsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/treatments`);
      console.log("Response from /api/treatments:", data); 
  
      if (data.success) {
        console.log("Setting treatments to:", data.treatments);
        setTreatments(data.treatments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error fetching treatments:", error);
      toast.error(error.message);
    }
  };
  
  // Fetch User Profile
  const loadUserProfileData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.log("No token found, authentication will fail.");
        return;
    }
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/myprofile`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Response from /api/user/myprofile:", data);

        if (data.success) {
            setUserData(data.user);
        } else {
            toast.error(data.message);
        }
    } catch (error) {
        console.log("Error fetching user profile:", error.response?.data?.message);
        toast.error(error.response?.data?.message || "Error fetching profile");

        // If token is invalid, remove it
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            setToken('');
            setUserData(null);
        }
    }
};


  useEffect(() => {
    if (treatments.length === 0) {
      getTreatmentsData();
    }
  }, []);

  useEffect(() => {
    console.log("AppContext values:", { token, backendUrl, userData });

    if (token) {
        console.log("Fetching user profile...");
        loadUserProfileData();
    } else {
        setUserData(null);
    }
}, [token]);  

  const value = {
    currencySymbol,
    treatments, 
    getTreatmentsData,
    backendUrl,
    token,
    setToken,
    userData,
    setUserData,
    loadUserProfileData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
