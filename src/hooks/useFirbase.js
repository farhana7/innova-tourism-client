import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  // logOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Login/Firebase/firebase.init";

// initializeFirebase();

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const singInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    return (
      signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //   setUser(result.user);
        // })
        .finally(() => setIsLoading(false))
    );
  };
  // observe user state change

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    // error,
    singInUsingGoogle,
    logOut,
    // signOut,
  };
};

export default useFirebase;
