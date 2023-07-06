import React from "react";
import Slider from "../../assest/swiper";
import CardTemp from "./CardTemp";
import styled from "@emotion/styled";

const stylecommom = {
  border: 0,
  boxshadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  bcolor: "#fff",
  borderradius: "20px",
  textalign: "center",
  fontsize: "80px",
  textalignicon: "center",
  color: "#fdc8af",
  borderbutton: "1px solid #fe8f73",
  buttonbackcolor: "#fff",
  buttoncolor: "#ff7e5c",
  anchorradius: "13px",
  headcolor: "#0c2740",
  paragraphcolor: "#828f9a",
  responsivewidth: "100%",
  responsivepadding: "15px 0",
  width: "100%",
};

function CoverFlowTemp() {
  const fn = function () {};
  const settings = {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 4,
    coverflowEffect: {
      rotate: 0, // Slide rotate in degrees
      stretch: 50, // Stretch space between slides (in px)
      depth: 600, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: true, // Enables slides shadows
    },
  };
  const data = [...Array(10).keys()];
  return (
    <>
      <Slider settings={settings}>
        {data.map((item) => {
          <CardTemp
            key={item}
            headtext="Cardio Strength"
            paragraphtext="Combining bodyweight cardio with strength exercises."
            linktext="Learn More"
            {...stylecommom}
            icontext="settings_accessibility"
            paddinglearmore="0"
          />;
        })}
      </Slider>
    </>
  );
}

export default CoverFlowTemp;
