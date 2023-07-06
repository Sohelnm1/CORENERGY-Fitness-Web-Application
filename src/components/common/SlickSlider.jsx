import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Label from "./Label";
import Slider from "react-slick";
import styled from "@emotion/styled";

function SlickSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 2000,
  };

  const SliderSlickStyled = styled(Slider)({
    ".slick-arrow": {
      //   backgroundColor: "#dcdfe4",
      position: "absolute",
      top: "100%",
    },
    ".slick-prev": {
      left: "95%",
    },
    ".slick-prev:before, .slick-next:before": {
      color: "#dcdfe4",
      fontSize: "27px",
    },

    "&:hover .slick-prev:before, .slick-next:before": {
      color: "#ff6b50",
    },
    "@media (max-width: 768px)": {
      ".slick-next": {
        right: "15px",
      },
      ".slick-prev": {
        left: "85%",
      },
    },
  });

  return (
    <SliderSlickStyled {...settings}>
      {/* <Slider {...settings}> */}
      <div className="slider d-flex justify-content-center align-items-center flex-column d-md-block">
        <Label headingsecond color="#ff6b50" fontsize="25px">
          Dayat Santoso
        </Label>
        <Label headingthird color="#606f7e" fontsize="20px">
          Los Angeles,CA
        </Label>
        <Label
          contentHeading
          color="#b7bcc3"
          padding="48px 72px 48px 0"
          responsivepadding="0px"
        >
          Thank you, Corenergy for giving me the motivation to better myself!
          Being in an actual gym setting was always uncomfortable for me...being
          able to take you with me on trips, and being in the comfort of my home
          changes my life.
        </Label>
      </div>
      <div className="slider d-flex justify-content-center align-items-center flex-column d-md-block">
        <Label headingsecond color="#ff6b50" fontsize="25px">
          Dayat Santoso
        </Label>
        <Label headingthird color="#606f7e" fontsize="20px">
          Los Angeles,CA
        </Label>
        <Label
          contentHeading
          color="#b7bcc3"
          padding="48px 72px 48px 0"
          responsivepadding="0px"
        >
          Thank you, Corenergy for giving me the motivation to better myself!
          Being in an actual gym setting was always uncomfortable for me...being
          able to take you with me on trips, and being in the comfort of my home
          changes my life.
        </Label>
      </div>
      <div className="slider d-flex justify-content-center align-items-center flex-column d-md-block">
        <Label headingsecond color="#ff6b50" fontsize="25px">
          Dayat Santoso
        </Label>
        <Label headingthird color="#606f7e" fontsize="20px">
          Los Angeles,CA
        </Label>
        <Label
          contentHeading
          color="#b7bcc3"
          padding="48px 72px 48px 0"
          responsivepadding="0px"
        >
          Thank you, Corenergy for giving me the motivation to better myself!
          Being in an actual gym setting was always uncomfortable for me...being
          able to take you with me on trips, and being in the comfort of my home
          changes my life.
        </Label>
      </div>
      <div className="slider d-flex justify-content-center align-items-center flex-column d-md-block">
        <Label headingsecond color="#ff6b50" fontsize="25px">
          Dayat Santoso
        </Label>
        <Label headingthird color="#606f7e" fontsize="20px">
          Los Angeles,CA
        </Label>
        <Label
          contentHeading
          color="#b7bcc3"
          padding="48px 72px 48px 0"
          responsivepadding="0px"
        >
          Thank you, Corenergy for giving me the motivation to better myself!
          Being in an actual gym setting was always uncomfortable for me...being
          able to take you with me on trips, and being in the comfort of my home
          changes my life.
        </Label>
      </div>
      <div className="slider d-flex justify-content-center align-items-center flex-column d-md-block">
        <Label headingsecond color="#ff6b50" fontsize="25px">
          Dayat Santoso
        </Label>
        <Label headingthird color="#606f7e" fontsize="20px">
          Los Angeles,CA
        </Label>
        <Label
          contentHeading
          color="#b7bcc3"
          padding="48px 72px 48px 0"
          responsivepadding="0px"
        >
          Thank you, Corenergy for giving me the motivation to better myself!
          Being in an actual gym setting was always uncomfortable for me...being
          able to take you with me on trips, and being in the comfort of my home
          changes my life.
        </Label>
      </div>
      {/* </Slider> */}
    </SliderSlickStyled>
  );
}

export default SlickSlider;
