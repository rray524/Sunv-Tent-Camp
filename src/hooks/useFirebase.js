import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initFirebase from "../Firebase/firebase.init";

initFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    const provider = new GoogleAuthProvider();
    // GOOGLE SIGN IN HANDLE
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, provider)

    }
    // LOG OUT
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    // GET CURRENTLY SIGN IN USER
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setLoading(false)
        });
    }, [])

    return { user, logout, handleGoogleSignIn, setError, loading }

}

export default useFirebase;