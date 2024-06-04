"use client";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { context_type } from "../type";
import React from "react";

const AuthContext = createContext<context_type | null>(null);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>();
  const [loading, setloading] = useState(true);
  const signingoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result?.user.displayName);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const work = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser?.displayName) {
        setUser(currentuser?.displayName);
        return;
      } else {
        setUser(currentuser?.email);
      }
    });
    const checkauthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setloading(false);
    };
    checkauthentication();

    return () => work();
  }, [user]);
  const signout = async () => {
    try {
      await auth.signOut();
      setUser("");
    } catch (error) {
      console.error(error);
    }
  };
  const signemail_pass = async (
    email: string,
    password: string,
    signup: boolean
  ) => {
    if (signup) {
      try {
        let a = await createUserWithEmailAndPassword(auth, email, password);
      } catch (error: any) {
        if (error.code === "auth/email-already-in-use") {
          alert("user already, exists");
        } else {
          console.log(error);
        }
      }
    } else {
      try {
        let a = await signInWithEmailAndPassword(auth, email, password);
      } catch (error: any) {
        if (error.code === "auth/email-already-in-use") {
          alert("user already, exists");
        } else {
          console.log(error);
        }
      }
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, signout, signingoogle, signemail_pass, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const UseAuth = () => {
  const s = useContext(AuthContext);
  if (!s) {
    throw new Error("context must be used with usestore context");
  }
  return s;
};
export { AuthContextProvider, UseAuth };
