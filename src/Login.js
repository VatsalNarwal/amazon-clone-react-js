import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth, provider } from "./firebase";
import firebase from "firebase";
import { actionTypes } from "./reducer";
import "firebase/auth";
import { useStateValue } from "./StateProvider";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{}, dispatch] = useStateValue();

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const send_verification = () => {
    var user = firebase.auth().currentUser;
    user
      .sendEmailVerification()
      .then(function () {
        window.alert("Verification email sent successfully. Check your inbox.");
      })
      .catch(function (error) {
        window.alert("Error sending verification email");
      });
  };

  const register = (e) => {
    e.preventDefault();
    var user = firebase.auth().currentUser;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
          send_verification();
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the Terms of Service and Privacy Policy of
          FAKE Amazon
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
        <button onClick={signInWithGoogle} className="login__registerButton">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
