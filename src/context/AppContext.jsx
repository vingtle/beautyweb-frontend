import { createContext, useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
//import { useNavigate } from "react-router-dom";
import treatmentCategories from "../components/Treatment Card/treatmentCategories";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isLogged: false, user: null, token: null });
  //const navigate = useNavigate();

  // Automatically refresh authentication state
  /*useEffect(() => {
    const refreshAuth = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/user/refresh`,
          { method: "GET", credentials: "include" }
        );
        if (!response.ok) throw new Error("Failed to refresh authentication");

        const token = response.headers.get("Authorization");
        const [user] = await response.json();
        user.token = token;

        setAuth({ isLogged: true, user, token });
      } catch (error) {
        toast.error("Session expired. Please log in again.");
        setAuth({ isLogged: false, user: null, token: null });
        navigate("/login");
      }
    };

    refreshAuth();
  }, [navigate]);*/

  const value = {
    auth,
    setAuth,
    treatmentCategories,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
      <ToastContainer />
    </AppContext.Provider>
  );
};

export default AppContextProvider;
