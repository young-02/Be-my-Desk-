import { auth } from '@/shared/firebase';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

type Props = {};

export default function useCheckLogin() {
  const [isLogin, setIsLogin] = useState(false);
  const [isUserObj, setIsUserObj] = useState(null);

  const logOut = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
        setIsUserObj(auth.currentUser?.displayName);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  return { isLogin, isUserObj, logOut };
}