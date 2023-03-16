import "./workwithus.css";

const WorkWithUs = () => {
  return (
    <div className="container-work">
      <div className="image-work-wrapper">
        <img src="./images/Work.webp" alt="Work With Us" />
      </div>
      <div className="form-work">
        <p className="title">WORK WITH US</p>
        <p className="desc">
          Send us a message to discuss your project in further detail, or for
          information about our services.
        </p>
        <form>
          <p>Email</p>
          <input type="text" />
          <br></br>
          <button>
            Submit{" "}
            <span>
              {" "}
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default WorkWithUs;
