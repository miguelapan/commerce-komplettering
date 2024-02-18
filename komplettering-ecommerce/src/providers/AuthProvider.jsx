import { useState, useEffect, createContext } from "react";
import { loginService } from "../httpService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const [validationMessage, setValidationMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (token) {
        setIsAuthenticated(true)
    }
}, [isAuthenticated]);

const getToken = async (url, authentication) => {
    try {
        const { data } = await loginService.post(url, authentication);
        localStorage.setItem("accessToken", data.token);
        setValidationMessage(data.message);
        localStorage.setItem("isLoggedIn", "true");
        setToken(data.token);
        setIsAuthenticated(true);
    } catch {
      setValidationMessage("NOT A USER");
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    setIsAuthenticated(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        getToken,
        validationMessage,
        isLoggedIn,
        setIsLoggedIn,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };