import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../images/logos/logo.png";
import "./Login.css";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { UserContext } from "../../App";

const app = initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();
  const {from} = location.state || {from : {pathname: '/'}}

const auth = getAuth();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setLoggedInUser(user);
        navigate(from, {replace: true})
        sessionStorage.setItem("token", token)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <Link to="/">
            <img src={img} alt="" style={{ width: "200px" }} />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="login-card">
            <h3>Login With</h3>
            <button onClick={handleGoogleSignIn} className="google-login-btn">
              Continue with Google
            </button>
            <p>
              Don’t have an account?{" "}
              <Link to="/res">
                <span>Create an account</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
