import React from "react";
import * as S from "./AboutMeStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);

const AboutMe = () => (
  <>
    <S.AboutMeHeader id="about">About Me</S.AboutMeHeader>
    <S.AboutMeWrap>
      <div className="about-content">
        <h1>Background</h1>
        <li>Grew up in Waynesfield, Ohio</li>
        <li>
          Attended the University of Cincinnati
          <ul>
            <li>BBA Information Systems</li>
            <li>BS Industrial Management</li>
          </ul>
        </li>
        <li>
          Currently residing on the east side of Cincinnati with my wife,
          Allissa, and our dog, Jagg.
        </li>
        <h1>Hobbies</h1>
        <li>
          I enjoy staying active by running, lifting weights, biking and skiing.
        </li>
        <li>
          I love traveling and experiencing new places, food, and cultures.
        </li>
        <li>When I have time, I also like to game with my friends.</li>
      </div>
      <Swiper
        className="swiper-container"
        navigation
        pagination
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="images/image1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/image2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/image3.jpg" />
        </SwiperSlide>
      </Swiper>
    </S.AboutMeWrap>
  </>
);

export default AboutMe;
