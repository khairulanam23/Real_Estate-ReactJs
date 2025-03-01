import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { auth } from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth/cordova';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const FirebaseProvider = ({ children }) => {

    const [user,setUser] = useState(null)
    // console.log(user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleLogin = () =>{
         return signInWithPopup(auth, googleProvider);
    };
    const githubLogin = () =>{
         return signInWithPopup(auth, githubProvider);
    };
    const logout = () =>{
        setUser(null)
        return signOut(auth)
    }

    useEffect(() =>{
        onAuthStateChanged(auth, (user)=>{
            if (user) {
                setUser(user)
            }
        });
    },[]);

    const allVals = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        user
    }

    return (
        <AuthContext.Provider value={allVals}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.object.isRequired
};

export default FirebaseProvider;