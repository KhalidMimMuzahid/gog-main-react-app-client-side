import React, { createContext, useEffect, useState } from 'react';
import { confirmPasswordReset, createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('user available')

    // Providers 
    const googleProvider = new GoogleAuthProvider();
    const facebookProvide = new FacebookAuthProvider();
    const gitHubProvide = new GithubAuthProvider();

    // Gitbub log in 
    const gitHubSignin = () => {
        return signInWithPopup(auth, gitHubProvide);
    }
    // focebook log in 
    const FaceboolSignin = () => {
        return signInWithPopup(auth, facebookProvide)
    }

    // google sign in 
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // signUp with eamil and password 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login with eamil and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // for reset password email
    const sendResetPassword = ( email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const confirmPassword = (oobCode, password) => {
        return confirmPasswordReset(auth, oobCode, password);
    }

    // for logOut 
    const logOut = () => {
        return signOut(auth);
    }

    // for update the auth
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // authe state chane monitor 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        googleSignIn,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        sendResetPassword,
        confirmPassword,
        FaceboolSignin,
        gitHubSignin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;