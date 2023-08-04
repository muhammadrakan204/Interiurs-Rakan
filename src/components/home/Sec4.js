import "./sec4.css";

const Sec4 = () => {
  return (
    <section id="sec4">
      <div className="container-sec4">
        <div className="left-sec4 sofa">
          <div className="container-img-left">
            <img src="./images/sofa.jpg" alt="" className="img-left img-sofa" />
          </div>
          <div className="text-left">
            <p className="title-sec4">A natural color</p>
            <p className="desc-sec4">Natural color but with elegant style</p>
          </div>
        </div>
        <div className="right-sec4">
          <div className="text-stairs">
            <p className="title-sec4">Minimalist room</p>
            <p className="desc-sec4">Eye-catching decoration</p>
          </div>
          <div className="container-img-stairs">
            <img src="./images/stairs.jpg" alt="" className="img-stairs" />
          </div>
        </div>
        <div className="left-sec4 bathroom">
          <div className="container-img-left">
            <img src="./images/bathroom.jpg" alt="" className="img-left" />
          </div>
          <div className="text-left">
            <p className="title-sec4">Simple Furnitures</p>
            <p className="desc-sec4">classic but luxurious</p>
          </div>
        </div>
        <div className="button-sec4">
          <button>
            View catalog <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sec4;
