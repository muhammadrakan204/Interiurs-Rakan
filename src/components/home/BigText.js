import "../styles/bigtext.css";
import AOS from "aos";
import { useEffect } from "react";

const Bigtext = () => {
  useEffect(() => {
    AOS.init();
    AOS.init({
      once: true,
    });
  });

  return (
    <>
      <section id="big-text">
        <p>
          <span
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1600"
          >
            Discover
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1600"
          >
            inspirations
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1600"
          >
            interesting
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1600"
          >
            interior
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1600"
          >
            design
          </span>
        </p>
      </section>
      ;
    </>
  );
};

export default Bigtext;
