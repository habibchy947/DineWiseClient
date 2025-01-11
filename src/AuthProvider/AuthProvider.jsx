import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.init';
import axios from 'axios';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // console.log(user)
    const [loading, setLoading] = useState(true)
    // google sign in
    const provider = new GoogleAuthProvider()
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // console.log('state captured', currentUser?.email)

            if (currentUser?.email) {
                const user1 = { email: currentUser?.email }
                axios.post('https://dine-wise-server-pi.vercel.app/jwt', user1, { withCredentials: true })
                    .then(res => {
                        // console.log("login token",res.data)
                        setLoading(false)
                    })
            }else{
                axios.post('https://dine-wise-server-pi.vercel.app/logout', {}, {withCredentials: true})
                .then(res => {
                    // console.log('logout', res.data)
                    setLoading(false)
                })
            }
            
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = {
        setUser,
        user,
        setLoading,
        loading,
        googleSignIn,
        createUser,
        signInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;