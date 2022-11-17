import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config'

export const authContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = { createUser }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;