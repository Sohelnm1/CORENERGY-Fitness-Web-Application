import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Label from "../common/Label";
import Slider from "react-slick";
import styled from "@emotion/styled";
import MaterialIcon from "../common/MaterialIcon";
import ButtonComponent from "../common/ButtonComponent";
import PopUpForDashboard from "../common/PopUpForDashboard";
import { caloriesData } from "../../data/JsonData";

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

// const caloriesData = [
//   {
//     key: 1,
//     icon: "directions_run",
//     heading: "Running",
//     details: "120.5 km",
//     bcolor: "#161132",
//   },
//   {
//     key: 2,
//     icon: "heart_broken",
//     heading: "BMI",
//     details: "12 bmi",
//     bcolor: "#fcad77",
//   },
//   {
//     key: 3,
//     icon: "directions_run",
//     heading: "Calorie loss",
//     details: "7,890 kcal",
//     bcolor: "#837ffa",
//   },
//   {
//     key: 4,
//     icon: "directions_run",
//     heading: "Steps",
//     details: "11,000 steps",
//     bcolor: "#72c7fd",
//   },
//   {
//     key: 5,
//     icon: "favorite",
//     heading: "Heart beat",
//     details: "78",
//     bcolor: "#fcad77",
//   },
//   {
//     key: 6,
//     icon: "heart_broken",
//     heading: "Oxygen level",
//     details: "98",
//     bcolor: "#837ffa",
//   },
// ];

function ProfileSlickCalories({ options = { caloriesData } }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: 1000,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };

  const [count, setCount] = useState();

  const handleCount = () => {
    setCount(1);
  };

  const canClicked = () => {
    setCount(0);
  };

  const SliderSlickStyled = styled(Slider)({});

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
      <SliderSlickStyled {...settings}>
        {caloriesData.map((el) => {
          return (
            <CardContentStyled
              className="slider d-flex align-items-center"
              key={el.key}
              color={el.bcolor}
            >
              <MaterialIcon
                color="#fff"
                fontsize="34px"
                bcolor="#292342"
                padding="0px"
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
      </SliderSlickStyled>
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

export default ProfileSlickCalories;
