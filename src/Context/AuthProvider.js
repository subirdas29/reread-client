import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,updateProfile,signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext =createContext()
const auth =getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState('')
    const [loading,setLoading] = useState(true)

const createUser = (email,password)=>
{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    
}

const logIn = (email,password)=>
{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const updateUser= (userInfo)=>{
    return updateProfile(auth.currentUser, userInfo)
}

const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
}

const googleSignIn = (provider) =>
{
    setLoading(true)
    return signInWithPopup(auth, provider)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        
        setUser(currentUser)
        setLoading(false)
});
return()=>unsubscribe();
},[])

const authInfo = {
    createUser,
    logIn,
    user,updateUser,logOut,loading,googleSignIn
}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;