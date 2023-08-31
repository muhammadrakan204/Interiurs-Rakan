import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //state untuk username yang berhasil login
  const [userLogin, setUserLogin] = useState();
  const [pwLogin, setPwLogin] = useState();

  //function untuk memasukan username ke state
  const handleUsername = (e) => {
    setUserLogin(e.target.value);
  };

  //function untuk memasukan pw ke state
  const handlePassword = (e) => {
    setPwLogin(e.target.value);
  };

  //navigate untuk move to other page
  const navigate = useNavigate();

  //validation untuk login
  const handleLogin = () => {
    if (
      userLogin === localStorage.getItem("username") &&
      pwLogin === localStorage.getItem("password")
    ) {
      localStorage.setItem("userLogin", userLogin);
      navigate("/shop");
    } else {
      alert("Wrong username or password");
    }
  };

  return (
    <>
      <div className="container-login">
        <div className="login-wrapper">
          <p className="title-login">Login Account</p>
          <p className="nice-login">Nice to see you again!</p>
          <form className="login-form" onSubmit={handleLogin}>
            <p>Username</p>
            <input type="text" onChange={handleUsername} required />
            <p>Password</p>
            <input type="password" onChange={handlePassword} required />
            <button>Login</button>
          </form>
          <a href="/signup">Don't have an account?</a>
        </div>
        <div className="body-cursor"></div>
        <div className="child-cursor"></div>
      </div>
    </>
  );
};

export default Login;
