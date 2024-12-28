// src/components/common/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext'; // src/contexts/UserContext.js

// ProtectedRoute จะเช็คว่าผู้ใช้ล็อกอินหรือไม่
// If not logged in, redirect to /login and pass the 'from' location

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (!user) {
    // ถ้าไม่ล็อกอิน ให้ไป login และแนบ state 'from' เพื่อกลับมาหน้านี้หลัง login
    // If not logged in, go to login and attach state.from to return here after login
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
