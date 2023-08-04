import "./sec3.css";

const Sec3 = () => {
  return (
    <section id="sec3">
      <div class="container-sec3">
        <div class="left-sec3">
          <div className="wrapper-img1">
            <img src="images/Woodenpot.webp" alt="" class="img1" />
          </div>
          <div className="wrapper-img2">
            <img src="images/imgSec3_2_.webp" alt="" class="img2" />
          </div>
        </div>
        <div class="right-sec3">
          <div class="content-right-sec3">
            <p>
              We
              <span class="target-cursor">
                <a href="/about">create</a>
              </span>
              tailor made
              <span class="target-cursor">
                <a href="/about">interiors</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec3;
