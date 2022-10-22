import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase.init';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile, sendEmailVerification} from 'firebase/auth';

export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})

    const [isLoading, setLoading] = useState(true)

    

    const googleProvider = new GoogleAuthProvider();

     // Create user
     const createUser = (email,password)=>{
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)
     }

    //  update user profile

    const updateUserProfile = (profile)=>{
        setLoading(true)

        return updateProfile(auth.currentUser,profile)
    }

    //  sign in with gmail
    const signInUser = (email, password) => {
        setLoading(true)

       return signInWithEmailAndPassword(auth, email, password)

    }

    // Reset pass
    const resetPassword = (email) =>{
        setLoading(true)

       return sendPasswordResetEmail(auth,email)
    }

    // signin with google

    const signInWithGoogle =()=> {
        setLoading(true)

        return signInWithPopup(auth, googleProvider)
    }

    // User verification
    const userVerification = ()=>{
        setLoading(true)

        return sendEmailVerification(auth.currentUser)
    }
   

    // LogOut

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user, 
        signInWithGoogle, 
        logOut, 
        createUser,
        signInUser,
        resetPassword,
        updateUserProfile,
        userVerification,
        isLoading,
        setLoading
    }


    // set logedin user
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser)
            }
            setLoading(false)
        })
        return ()=>{
            unsubcribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;