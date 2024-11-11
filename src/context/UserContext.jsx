import React, { createContext, useState } from "react";
import { API_CONFIG } from "../config";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  const login = async ({ email, password }) => {
    try {
      const response = await fetch(`http://${API_CONFIG.ip}:${API_CONFIG.port}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        setToken(data.token);
        setEmail(data.email);
      } else {
        throw new Error(data.message || "No se pudo iniciar sesión");
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await fetch(`http://${API_CONFIG.ip}:${API_CONFIG.port}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (data.token) {
        setToken(data.token);
        setEmail(data.email);
      } else {
        console.error("Registration failed:", data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const getProfile = async () => {
    if (!token) {
      console.error("Token no disponible, el usuario no está autenticado.");
      return;
    }

    try {
      const response = await fetch(`http://${API_CONFIG.ip}:${API_CONFIG.port}/api/auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        setUserProfile(data);
      } else {
        console.error("Error al obtener el perfil del usuario:", data.message);
      }
    } catch (error) {
      console.error("Error durante la solicitud de perfil:", error);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    setUserProfile(null);
  };

  return (
    <UserContext.Provider
      value={{ token, email, userProfile, login, register, getProfile, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
