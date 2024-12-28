// src/contexts/UserContext.js
import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase'; // Import auth from firebase.js ที่ initialize แล้ว

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    // เขียนฟังก์ชัน login โดยใช้ signInWithEmailAndPassword(auth, email, password)
  };

  const logout = () => {
    // เขียนฟังก์ชัน logout โดยใช้ signOut(auth)
  };

  const refreshAuthToken = () => {
    // ถ้าต้องการรีเฟรช token ให้เรียกฟังก์ชันตามที่ออกแบบ (Firebase อาจมีการ refresh token อัตโนมัติอยู่แล้ว)
  };

  const value = {
    user,
    login,
    logout,
    refreshAuthToken
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
