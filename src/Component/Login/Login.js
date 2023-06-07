import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import "./Login.css";

const Login = () => {
  const [emailLogIn, setEmailLogIn] = useState("");
  const [passwordLogIn, setPasswordLogIn] = useState("");
  const navigate = useNavigate();

  //login
  const logIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailLogIn, passwordLogIn)
      .then(() => {
        redirectToAdmin();
        console.log("successfully logged in");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode); // Log the error code for troubleshooting
        alert(errorCode);
      });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    logIn();

  };

  const redirectToAdmin = () => {
    navigate("/dashboard");
  };

  const handleChangeEmail = (event) => {
    setEmailLogIn(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPasswordLogIn(event.target.value);
  };

  return (
    <div className="hero">
      <div className="login box">
        <h2 className="connecter">Se connecter</h2>
        <form className="login" id="connecter" onSubmit={handleSubmitLogin}>
          <div className="form-group">
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="exemple@gmail.com"
                onChange={handleChangeEmail}
                autoComplete="off" 
              />
              <AiOutlineMail className="inpute-icon" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-container">
              <input
                type="password"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter password"
                onChange={handleChangePassword}
              />
              <AiOutlineLock className="inpute-icon" />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
