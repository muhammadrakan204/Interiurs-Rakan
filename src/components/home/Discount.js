import "../styles/discount.css";

const Discount = () => {
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
          <form action="">
            <p>Full name</p>
            <input type="text" className="name-input" />
            <p>Email</p>
            <input type="text" className="email-input" />
          </form>
          <button className="button-discount">
            Submit <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discount;
