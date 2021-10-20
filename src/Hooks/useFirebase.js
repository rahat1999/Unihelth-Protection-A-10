import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Components/Firebase/Firebase.init';
initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("")
    // console.log(user)
    const auth = getAuth();
    const provider = new GoogleAuthProvider()

    //google login
    const logInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {

            });
    }
    const LogOut = () => {
        signOut(auth)
            .then(() => { })
    }

    // for lohin in 
    const processLogin = (email, password) => {
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setError("")
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });

    }

    // for register
    const registerWithEamilAndPass = (regEmail, regPassword) => {
        console.log(regEmail, regPassword)
        createUserWithEmailAndPassword(auth, regEmail, regPassword)
            .then((result) => {
                setUser(result.user);
                setError("")

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }


    //Observe user state change
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
        return () => unSubscribed;
    }, [])

    return {
        user,
        logInWithGoogle,
        LogOut,
        error,
        processLogin,
        registerWithEamilAndPass,
    }
};

export default useFirebase;