import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import styled from "@emotion/styled";
import "../../src/css/Swiper.css";

const SwiperStyled = styled(Swiper)({
  ".swiper-container-3d .swiper-wrapper": {
    height: "400px",
  },
  ".swiper-container-vertical > .swiper-wrapper": {
    height: "400px",
  },
  ".swiper-wrapper": {
    height: "400px",
  },
  "..swiper-container-3d": {
    height: "400px",
  },

  // "&:hover .slick-prev:before, .slick-next:before": {
  //   color: "#ff6b50",
  // },
  // "@media (max-width: 768px)": {
  //   ".slick-next": {
  //     right: "15px",
  //   },
  //   ".slick-prev": {
  //     left: "85%",
  //   },
  // },
});

const Slider = ({ settings, children }) => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    ...settings,
  };

  return <SwiperStyled {...params}>{children}</SwiperStyled>;
};

export default Slider;
