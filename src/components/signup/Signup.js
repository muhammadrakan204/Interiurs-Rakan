import "./signup.css";

const Signup = () => {
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
            <div className="form-signup">
              <p>Full Name</p>
              <input type="text" />
              <p>Email Address</p>
              <input type="text" />
              <p>Password</p>
              <input type="password" />
              <p>Confirm Password</p>
              <input type="password" />
            </div>
            <button>Sign Up</button>
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
