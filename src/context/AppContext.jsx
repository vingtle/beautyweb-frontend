import { createContext, useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import treatmentCategories from "../components/Treatment Card/treatmentCategories";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isLogged: false, user: null, token: null });

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
