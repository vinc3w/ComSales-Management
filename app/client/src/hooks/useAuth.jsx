import { createContext, useContext, useEffect, useState } from "react";
import { SERVER_URL } from "../config.json";
import axios from "axios";
import getCookie from "../utils/getCookie";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {

      const token = getCookie('token');
      if (!token) throw new Error('No token');
      setIsLoading(true);
      const { data } = await axios.get(`${SERVER_URL}/user?token=${token}`);
      setUser(data.user);
      setIsLoading(false);

    } catch (error) {
        
      setUser(null);
      setIsLoading(false);
        
    }
  }

  useEffect(() => {

    getUser();

  }, [])

  return (
    <AuthContext.Provider value={[user, isLoading, getUser]}>{ children }</AuthContext.Provider>
  );

}

export function useAuth() {
  
  return useContext(AuthContext);

}
