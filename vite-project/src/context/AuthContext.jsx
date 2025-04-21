
// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (email, password) => {
//     // Dummy logic — you can make it more complex if needed
//     if (email === "test@example.com" && password === "123456") {
//       const dummyUser = { email };
//       setUser(dummyUser);
//       localStorage.setItem("user", JSON.stringify(dummyUser));
//       return Promise.resolve();
//     } else {
//       return Promise.reject(new Error("Invalid email or password"));
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   const isLoggedIn = !!user;

//   return (
//     <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import { createContext, useContext, useState, useEffect } from "react";

// Create the context for authentication
const AuthContext = createContext();

// Custom hook to use the Auth context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the app and provide the context
export const AuthProvider = ({ children }) => {
  // Load user from localStorage if it exists, else set null
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const isLoggedIn = !!user;  // Determine if the user is logged in based on user state

  // Login function (dummy logic)
  const login = (email, password) => {
    if (email === "test@example.com" && password === "123456") {
      const dummyUser = { email };  // Creating a dummy user object
      setUser(dummyUser);
      localStorage.setItem("user", JSON.stringify(dummyUser));  // Storing user in localStorage
      return Promise.resolve();  // Resolve the promise on successful login
    } else {
      return Promise.reject(new Error("Invalid email or password"));  // Reject if credentials are invalid
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);  // Clear user state
    localStorage.removeItem("user");  // Remove user from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
