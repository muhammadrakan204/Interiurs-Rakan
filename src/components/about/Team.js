import "./team.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Team = () => {
  return (
    <div className="container-team">
      <p className="title-team">OUR TEAM</p>
      <Swiper
        spaceBetween={220}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
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
          <p className="name">Ahmad Thanos</p>
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
          <p className="name">Ahmad udin</p>
          <p className="job">Technical Design Manager</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slider-wrapper">
            <img
              src="./images/orang2.webp"
              alt="orang1"
              className="image-slider"
            />
          </div>
          <p className="name">Ahmad Thanos</p>
          <p className="job">Technical Design Manager</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slider-wrapper">
            <img
              src="./images/orang4.webp"
              alt="orang1"
              className="image-slider"
            />
          </div>
          <p className="name">Stephanie Lirevani</p>
          <p className="job">Technical Design Manager</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Team;
