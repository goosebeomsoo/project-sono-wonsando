import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {
  const auth = { password: localStorage.getItem('status') };
  return auth.password ? <Outlet /> : <Navigate to={`${process.env.PUBLIC_URL}/`} />;
}

export default PrivateRoutes;
