// import React, { useContext, useState, useEffect } from 'react';
// import GoogleButton from "react-google-button";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./login.css";
// import { AppContext } from "../context/AppContext";

// const Login = () => {
//   const [state, setState] = useState("Sign Up");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const navigate = useNavigate();
//   const { backendUrl, token, setToken } = useContext(AppContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/login`, { email, password });
//         if (data.success) {
//             localStorage.setItem('token', data.token);
//             navigate('/dashboard');
//         } else {
//             console.error(data.message);
//         }
//     } catch (error) {
//         console.error(error.message);

//       if (data.success) {
//         localStorage.setItem('token', data.token)
//         setToken(data.token)
//       } else {
//         toast.error(data.message)
//       }

//     }

//   }

//   useEffect(() => {
//     if (token) {
//       navigate('/')
//     }
//   }, [token])

//   const handleGoogleLogin = () => {
//     window.location.href = `${backendUrl}/api/google`;
//   };

//   return (
//     <form className="login-form" onSubmit={handleSubmit}>
//       <div className="login-container">
//         <p className="login-title">{state === "Sign Up" ? "Create Account" : "Login"}</p>
//         <p className="login-subtitle">
//           Please {state === "Sign Up" ? "sign up" : "log in"} to book an appointment
//         </p>
//         {state === "Sign Up" && (
//           <div className="input-group">
//             <p>Name</p>
//             <input
//               className="input-field"
//               type="text"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               required
//             />
//           </div>
//         )}
//         <div className="input-group">
//           <p>Email</p>
//           <input
//             className="input-field"
//             type="email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <p>Password</p>
//           <input
//             className="input-field"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//           />
//         </div>
//         <button className="submit-button">
//           {state === "Sign Up" ? "Create Account" : "Login"}
//         </button>
//         <div className="alternative-login">
//           <p>OR</p>
//           <GoogleButton className="google-btn" onClick={handleGoogleLogin} />
//         </div>
//         {state === "Sign Up" ? (
//           <p>
//             Already have an account?{" "}
//             <span onClick={() => setState("Login")} className="link">
//               Login here
//             </span>
//           </p>
//         ) : (
//           <p>
//             Create a new account?{" "}
//             <span onClick={() => setState("Sign Up")} className="link">
//               Click here
//             </span>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Login;


// import React, { useContext, useState, useEffect } from 'react';
// import GoogleButton from "react-google-button";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./login.css";
// import { AppContext } from "../context/AppContext";

// const Login = () => {
//   const [state, setState] = useState("Sign Up");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const navigate = useNavigate();
//   const { backendUrl, token, setToken } = useContext(AppContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const endpoint = state === "Sign Up" ? "/api/user/register" : "/api/user/login";
//       const { data } = await axios.post(`${backendUrl}${endpoint}`, 
//         { email, password, name }, 
//         { headers: { "Content-Type": "application/json" } }
//       );
      
//       if (data.success) {
//         localStorage.setItem("token", data.token);
//         setToken(data.token);
//         navigate('/dashboard');
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Login failed! Please check your credentials.");
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       navigate('/');
//     }
//   }, [token, navigate]);

//   const handleGoogleLogin = () => {
//     window.location.href = `${backendUrl}/api/google`;
//   };
//   const handleLoginSuccess = (token) => {
//     setToken(token);
//     localStorage.setItem("token", token);
//     navigate("/payment");
//   };
  
//   return (
//     <form className="login-form" onSubmit={handleSubmit}>
//       <div className="login-container">
//         <p className="login-title">{state === "Sign Up" ? "Create Account" : "Login"}</p>
//         <p className="login-subtitle">
//           Please {state === "Sign Up" ? "sign up" : "log in"} to book an appointment
//         </p>
//         {state === "Sign Up" && (
//           <div className="input-group">
//             <p>Name</p>
//             <input
//               className="input-field"
//               type="text"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               required
//             />
//           </div>
//         )}
//         <div className="input-group">
//           <p>Email</p>
//           <input
//             className="input-field"
//             type="email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <p>Password</p>
//           <input
//             className="input-field"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//           />
//         </div>
//         <button className="submit-button">
//           {state === "Sign Up" ? "Create Account" : "Login"}
//         </button>
//         <div className="alternative-login">
//           <p>OR</p>
//           <GoogleButton className="google-btn" onClick={handleGoogleLogin} />
//         </div>
//         {state === "Sign Up" ? (
//           <p>
//             Already have an account?{" "}
//             <span onClick={() => setState("Login")} className="link">
//               Login here
//             </span>
//           </p>
//         ) : (
//           <p>
//             Create a new account?{" "}
//             <span onClick={() => setState("Sign Up")} className="link">
//               Click here
//             </span>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Login;



import React, { useContext, useState, useEffect } from 'react';
import GoogleButton from "react-google-button";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./login.css";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { backendUrl, token, setToken } = useContext(AppContext);

  // Retrieve redirect state (e.g., after booking an appointment)
  const redirectPath = location.state?.from || "/payment"; 

  const fetchProfile = async (token) => {
    try {
      console.log("Fetching Profile with Token:", token);
  
      const { data } = await axios.get(`${backendUrl}/api/user/myprofile`, {
        headers: { Authorization: `Bearer ${token}` }
      });
  
      if (data.success) {
        console.log("User Profile:", data.user);
        localStorage.setItem("userData", JSON.stringify(data.user)); 
        window.dispatchEvent(new Event("storage")); 
      } else {
        console.error("Profile Fetch Error:", data.message);
      }
    } catch (error) {
      console.error("Profile Fetch Error:", error.response?.data?.message);
    }
  };
  

  
  // Handle Form Submission (Login/Register)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/login`, 
        { email, password }, 
        { headers: { "Content-Type": "application/json" } }
      );
  
      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        toast.success("Login Successful!");
  
        // Fetch user profile immediately after login
        await fetchProfile(data.token);
  
        const redirectPath = location.state?.from || "/dashboard";
        navigate(redirectPath);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Login failed! Please check your credentials.");
    }
  };
  
  

  // Redirect user if already logged in
  useEffect(() => {
    if (token) {
      navigate(redirectPath, { replace: true });
    }
  }, [token, navigate, redirectPath]);

  // Handle Google Login
  const handleGoogleLogin = () => {
    window.location.href = `${backendUrl}/api/user/google-auth`;
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-container">
        <p className="login-title">{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p className="login-subtitle">
          Please {state === "Sign Up" ? "sign up" : "log in"} to book an appointment
        </p>

        {state === "Sign Up" && (
          <div className="input-group">
            <p>Name</p>
            <input
              className="input-field"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="input-group">
          <p>Email</p>
          <input
            className="input-field"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="input-group">
          <p>Password</p>
          <input
            className="input-field"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button className="submit-button">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="alternative-login">
          <p>OR</p>
          <GoogleButton className="google-btn" onClick={handleGoogleLogin} />
        </div>

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setState("Login")} className="link">
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span onClick={() => setState("Sign Up")} className="link">
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
