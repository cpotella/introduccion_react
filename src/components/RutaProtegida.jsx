import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const RutaProtegida = ({ children }) => {
  const { token } = useContext(UserContext);

  return token ? children : <Navigate to="/login" />;
};

export default RutaProtegida;
