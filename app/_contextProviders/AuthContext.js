import React, { createContext, useState, useEffect } from "react";
import Router from "next/router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const savedUser = typeof window !== 'undefined' ? localStorage.getItem("user") : null;  const [user, setUser] = useState(savedUser ? savedUser : null);
   
  const apiDomain = ""
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = async (email, password, remember) => {
    try {
      const response = await fetch(apiDomain +'/api/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
        if (remember) {
          localStorage.setItem("user", data.user);
        }
        Router.push('/')
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const register = async (email, password, password_confirmation) => {
    try {
        
      const response = await fetch(apiDomain +"/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, password_confirmation }),
      });
      if (response.ok) {
        Router.push(`/auth/verify?email=${email}`)
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const verifyCode = async (email, code) => {
    try {
      const response = await fetch(apiDomain +"/api/verifycode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
        localStorage.setItem("user", data.user);
       
        Router.push('/')
         
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Verification failed:", error);
    }
  };

  const reVerifyCode = async (email) => {
    try {
      const response = await fetch(apiDomain +"api/send-verification-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        return data
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Verification failed:", error);
    }
  };

  const reForgotPassword = async (email) => {
    try {
      const response = await fetch(apiDomain +"api/password/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        return
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Verification failed:", error);
    }
  };

  const forgotPassword = async (email, password_new, password, password_confirmation) => {
    try {
      const response = await fetch(apiDomain +"api/password/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password_new, password, password_confirmation }),
      });
      const data = await response.json();
      if (response.ok) {
        Router.push('/auth/login')
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Verification failed:", error);
    }
  };

  const logout = async () => {
    try {
        const response = await fetch(apiDomain +"/api/logout", {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        });
        if (response.ok) {
            setUser(null);
            localStorage.removeItem("user");
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error("Verification failed:", error);
      }

  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, forgotPassword,
     reForgotPassword, verifyCode, reVerifyCode }}>
      {children}
    </AuthContext.Provider>
  );
};
