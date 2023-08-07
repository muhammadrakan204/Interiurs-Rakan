import { useState } from "react";
import "./login.css";

const Login = () => {
  const [userLogin, setUserLogin] = useState();
  const [pwLogin, setPwLogin] = useState();

  const handleUsername = (e) => {
    setUserLogin(e.target.value);
  };

  const handlePassword = (e) => {
    setPwLogin(e.target.value);
  };

  const handleLogin = () => {
    if (
      userLogin === localStorage.getItem("username") &&
      pwLogin === localStorage.getItem("password")
    ) {
      alert("berhasil");
    } else {
      alert("gagal");
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
            <input type="text" onChange={handleUsername} />
            <p>Password</p>
            <input type="password" onChange={handlePassword} />
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
