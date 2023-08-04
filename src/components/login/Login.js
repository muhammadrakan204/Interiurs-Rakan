import "./login.css";

const Login = () => {
  return (
    <>
      <div className="container-login">
        <div className="login-wrapper">
          <p className="title-login">Login Account</p>
          <p className="nice-login">Nice to see you again!</p>
          <div className="login-form">
            <p>Username</p>
            <input type="text" />
            <p>Password</p>
            <input type="password" />
            <button>Login</button>
          </div>
          <a href="/signup">Don't have an account?</a>
        </div>
        <div className="body-cursor"></div>
        <div className="child-cursor"></div>
      </div>
    </>
  );
};

export default Login;
