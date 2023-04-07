import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PublicRoutes() {
  const auth = { password: localStorage.getItem('status') };
  return !auth.password ? <Outlet /> : <Navigate to={`${process.env.PUBLIC_URL}/video`} />;
}

export default PublicRoutes;
