import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(null);
const STORAGE_KEY = "Users";

const getStoredUser = () => {
  if (typeof window === "undefined") return null;
  try {
    const storedUser = window.localStorage.getItem(STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Failed to parse stored user", error);
    return null;
  }
};

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(getStoredUser);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (authUser) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(authUser));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, [authUser]);

  const value = useMemo(() => [authUser, setAuthUser], [authUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
