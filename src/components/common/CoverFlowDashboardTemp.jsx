import React, { useState } from "react";
import Slider from "../../assest/swiper";
import { caloriesData } from "../../data/JsonData";
import styled from "@emotion/styled";
import MaterialIcon from "../common/MaterialIcon";
import Label from "../common/Label";
import ButtonComponent from "./ButtonComponent";
import PopUpForDashboard from "./PopUpForDashboard";

const CardContentStyled = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 8px;
  padding: 12px;
  gap: 12px;
  margin: 12px 0;
  width: 90%;

  &:hover {
    transform: scale(0.9);
    transition: 250ms all ease;
  }
`;

export default function CoverFlowDashboardTemp() {
  const [count, setCount] = useState();

  const handleCount = () => {
    setCount(1);
  };

  const canClicked = () => {
    setCount(0);
  };

  const settings = {
    effect: "coverflow",
    centeredSlides: true,
    direction: "vertical",
    loop: true,
    loopAdditionalSlides: 6,
    loopedSlides: 6,
    slidesPerView: "auto",
    freeMode: true,
    freeModeMomentumBounce: false,
    freeModeMomentumRatio: 0.1,
    freeModeMomentumVelocityRatio: 0.8,
    freeModeSticky: true,
    grabCursor: true,
    mousewheelControl: true,
    mousewheel: {
      releaseOnEdges: true,
    },
    // spaceBetween: 18,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    slidesPerView: 2,
    coverflowEffect: {
      rotate: 0, // Slide rotate in degrees
      stretch: 150, // Stretch space between slides (in px)
      depth: 200, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: false, // Enables slides shadows
    },
  };

  return (
    <>
      <ButtonComponent
        color="#7d7afa"
        border="0"
        margin="50px 0 0 0"
        onClick={handleCount}
        bcolor="#fff"
      >
        See details
      </ButtonComponent>
      <Slider settings={settings}>
        {caloriesData.map((el) => {
          return (
            <CardContentStyled
              className="slider d-flex align-items-center"
              key={el.key}
              color={el.bcolor}
            >
              <MaterialIcon
                color="#fff"
                fontsize="45px"
                bcolor="#292342"
                // padding="20px"
                borderRadius="50%"
              >
                {el.icon}
              </MaterialIcon>
              <div className="className">
                <Label
                  contentHeading
                  color="#fff"
                  fontsize="16px"
                  margin="10px"
                >
                  {el.heading}
                </Label>
                <Label
                  contentHeading
                  color="#fff"
                  fontsize="22px"
                  margin="10px"
                >
                  {el.details}
                </Label>
              </div>
            </CardContentStyled>
          );
        })}
      </Slider>
      <PopUpForDashboard
        count={count}
        caloriespanel
        canClicked={canClicked}
        wrapperpadding="20px"
        top="5%"
        gridheight="400px"
      />
    </>
  );
}
