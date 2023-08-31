import { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPw, setConfirmPw] = useState();

  const handleFullName = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPw = (e) => {
    setConfirmPw(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (
      username === localStorage.getItem("username") ||
      email === localStorage.getItem("email")
    ) {
      alert("Username or email already registered");
      e.preventDefault();
      return false;
    } else if (password != confirmPw) {
      alert("Password don't match");
      e.preventDefault();
      return false;
    } else {
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      navigate("/login");
    }
  };

  return (
    <>
      <div className="container-signup">
        <div className="wrapper-signup">
          <div className="kiri-signup">
            <a href="/shop">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
            <h1>Hello!</h1>
            <p className="desc-signup">Please signup here</p>
            <form className="form-signup" onSubmit={handleSubmit}>
              <p>Full Name</p>
              <input type="text" onChange={handleFullName} required />
              <p>Email Address</p>
              <input type="text" onChange={handleEmail} required />
              <p>Password</p>
              <input type="password" onChange={handlePassword} required />
              <p>Confirm Password</p>
              <input type="password" onChange={handleConfirmPw} required />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="kanan-signup">
            <p className="title-kanan-signup">Interiurs</p>
            <p>Already have an account?</p>
            <a href="/login">
              <button>Sign In</button>
            </a>
          </div>
        </div>
        <div className="body-cursor"></div>
        <div className="child-cursor"></div>
      </div>
    </>
  );
};

export default Signup;
