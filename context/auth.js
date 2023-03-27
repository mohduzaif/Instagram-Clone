import React, { createContext, useEffect, useState } from "react";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
export const AuthContext = createContext();

function AuthWrapper({ children }) {
  //   console.log("Hello in AuthWrapper");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        setUser(user);
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    setLoading(false);
  }, []);

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth);
  }

  const store = {
    login,
    logout,
    user,
  };

  return (
    <AuthContext.Provider value={store}>
      {/* <div>Hey there!!</div> */}
      {children}
    </AuthContext.Provider>
  );
}

export default AuthWrapper;
