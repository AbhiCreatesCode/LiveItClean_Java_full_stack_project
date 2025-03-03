// import { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const sessionExpiry = localStorage.getItem("sessionExpiry");

//     if (storedUser && sessionExpiry) {
//       const currentTime = new Date().getTime();
//       if (currentTime > sessionExpiry) {
//         console.log("Session expired. Logging out.");
//         logout(); // Expired session, so log out
//       } else {
//         setUser(JSON.parse(storedUser));
//       }
//     }
//   }, []);

//   const login = (userData) => {
//     const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000; // ✅ Set session expiry (24 hours)
//     localStorage.setItem("user", JSON.stringify(userData));
//     localStorage.setItem("sessionExpiry", expiryTime);
//     setUser(userData);
//     console.log("User Logged In:", userData);
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("sessionExpiry"); // ✅ Remove session expiry
//     setUser(null);
//     console.log("User Logged Out");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const sessionExpiry = localStorage.getItem("sessionExpiry");

    if (storedUser && sessionExpiry) {
      const currentTime = new Date().getTime();
      if (currentTime > sessionExpiry) {
        logout(); // Expired session, so log out
      } else {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const login = (userData) => {
    const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours session
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("sessionExpiry", expiryTime);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("sessionExpiry");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
