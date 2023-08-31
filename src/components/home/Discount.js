import { useState } from "react";
import "./discount.css";

const Discount = () => {
  const [discName, setDiscName] = useState();
  const [discEmail, setDiscEmail] = useState();

  const handleChangeName = (e) => {
    setDiscName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setDiscEmail(e.target.value);
  };

  const handleSubmitDiscount = () => {
    setDiscEmail("");
    setDiscName("");
  };

  return (
    <section id="discount">
      <div className="container-discount">
        <div className="img-discount">
          <img src="./images/dicount.webp" alt="" />
        </div>
        <div className="card-discount">
          <p className="title-discount">
            SUBSCRIBE TO GET UPDATE ABOUT TO GET LATEST DISCOUNT/OFFER
          </p>
          <form action="" onSubmit={handleSubmitDiscount}>
            <p>Full name</p>
            <input
              type="text"
              className="name-input"
              onChange={handleChangeName}
            />
            <p>Email</p>
            <input
              type="text"
              className="email-input"
              onChange={handleChangeEmail}
            />
            <button className="button-discount">
              Submit <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Discount;
