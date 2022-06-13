import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import firebaseInitializeApp from "../Firebase/firebase.init";

firebaseInitializeApp();

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();

const useFirebase = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_url = location?.state?.from || "/";

  const [user, setUser] = useState({});

  //email and password signup

  const handleEmailSignUp = (
    email,
    password,
    navigate,
    name,
    setRegisterLoding
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        setUser(user);
        swal("Registration", "Successfully Completed", "success");

        setTimeout(() => {
          logOut();
          navigate("/login");
        }, 2000);
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        swal("Already Registered!", "Please Login", "error");
        setRegisterLoding(false);
      });
  };

  //email and password signin

  const handleEmailSignIn = (email, password, navigate, setLoginLoding) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;

        setUser(user);
        setTimeout(() => {
          swal("Login", "Successfully", "success");
          navigate(redirect_url);
        }, 1000);
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        swal(
          "Worng Email and Password!",
          "Please Input Right Email and Password",
          "error"
        );
        setLoginLoding(false);
      });
  };

  //google sign in

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(redirect_url);
        setUser(user);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        swal(errorMessage, "Please Input Right Email and Password", "error");
      });
  };

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        navigate(redirect_url);
        setUser(user);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        swal(errorMessage, "Please Input Right Email and Password", "error");
      });
  };

  //reset password
  const handleResetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        swal("Email Sent", "Successfully", "success");
      })
      .catch((error) => {
        swal("Worng Email!", "Please Input Right Email", "error");
      });
  };

  //logout floor cleaning app

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => {
        setLoading(false);
      });
  };
  //user state change

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [setUser]);

  return {
    user,
    logOut,
    handleEmailSignUp,
    handleEmailSignIn,
    handleResetPassword,
    handleGoogleSignIn,
    handleFacebookSignIn,
    auth,
    loading,
  };
};

export default useFirebase;
