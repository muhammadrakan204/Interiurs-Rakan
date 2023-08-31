import "./team.css";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // Import Swiper modules
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components

SwiperCore.use([Navigation, Pagination]);

const Team = () => {
  return (
    <div className="container-team">
      <p className="title-team">OUR TEAM</p>
      <Swiper
        // navigation
        spaceBetween={120}
        pagination={{ clickable: true }}
        slidesPerView={2}
        className="paren"
      >
        <SwiperSlide className="anjas">
          <div className="image-slider-wrapper">
            <img
              src="./images/orang1.webp"
              alt="orang1"
              className="image-slider"
            />
          </div>
          <p className="name">John Finley</p>
          <p className="job">Technical Design Manager</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slider-wrapper">
            <img
              src="./images/orang3.webp"
              alt="orang1"
              className="image-slider"
            />
          </div>
          <p className="name">Bitsy Beatrix</p>
          <p className="job">Marketing Manager</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slider-wrapper">
            <img
              src="./images/orang2.webp"
              alt="orang1"
              className="image-slider"
            />
          </div>
          <p className="name">Bob Tagakura</p>
          <p className="job">Product Manager</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slider-wrapper">
            <img
              src="./images/bitsybrylee.webp"
              alt="orang1"
              className="image-slider"
            />
          </div>
          <p className="name">Stephanie Lirevani</p>
          <p className="job">IT Manager</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Team;
