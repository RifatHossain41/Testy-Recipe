import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


  const authInfo = {
    user,
    createUser,
    googleProvider,
    githubProvider
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;