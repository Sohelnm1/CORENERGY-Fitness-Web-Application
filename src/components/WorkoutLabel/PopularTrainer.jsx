import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Label from "../common/Label";
import Slider from "react-slick";
import styled from "@emotion/styled";
import MaterialIcon from "../common/MaterialIcon";
import ButtonComponent from "../common/ButtonComponent";
import { trainersData } from "../../data/JsonData";
import PopUpForDashboard from "../common/PopUpForDashboard";

const CardContentStyled = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 8px;
  padding: 12px;
  margin: 0px 0;
  width: 90%;
  border: 0;
  gap: 12px;

  &:hover {
    transform: scale(0.9);
    transition: 250ms all ease;
  }
`;

const ImgStyled = styled.img`
  border-radius: ${(props) => props.borderradius || "50%"};
  width: ${(props) => props.width || "25px"};
  display: ${(props) => props.display || "inline"};
  max-width: ${(props) => props.maxwidth || "100%"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "8px 0"};
  margin: ${(props) => props.margin};
  &:hover {
    transform: scale(1.1);
    transition: 250ms all ease;
  }
`;

// const trainersData = [
//   {
//     key: 1,
//     name: "Ramy Baginda",
//     profession: "Gym Trainer",
//     following: "12,668",
//     profileimg:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     key: 2,
//     name: "Ramy Baginda",
//     profession: "Gym Trainer",
//     following: "12,668",
//     profileimg:
//       "https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     key: 3,
//     name: "Ramy Baginda",
//     profession: "Gym Trainer",
//     following: "12,668",
//     profileimg:
//       "https://images.unsplash.com/photo-1571988654190-ef2bfb6fb147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     key: 4,
//     name: "Ramy Baginda",
//     profession: "Gym Trainer",
//     following: "12,668",
//     profileimg:
//       "https://images.unsplash.com/photo-1561828970-daff2303fe58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     key: 5,
//     name: "Ramy Baginda",
//     profession: "Gym Trainer",
//     following: "12,668",
//     profileimg:
//       "https://images.unsplash.com/photo-1585837146751-a44118595680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8NzYwODI3NzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     key: 6,
//     name: "Ramy Baginda",
//     profession: "Gym Trainer",
//     following: "12,668",
//     profileimg:
//       "https://images.unsplash.com/photo-1602746469689-460d31b6ed5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8NzYwODI3NzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     key: 7,
//     name: "Ramy Baginda",
//     profession: "Gym Trainer",
//     following: "12,668",
//     profileimg:
//       "https://images.unsplash.com/photo-1573727726579-10ce410611ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8NzYwODI3NzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//   },
// ];

function PopularTrainer() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: 2000,
    arrows: false,
    rtl: true,

    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const SliderSlickStyled = styled(Slider)({
    padding: "0 0 20px 0",
  });

  const [count, setCount] = useState();

  const handleCount = () => {
    setCount(1);
  };

  const canClicked = () => {
    setCount(0);
  };

  return (
    <>
      <div className="class position-relative">
        <Label headingsecond color="#221b56" fontsize="20px" margintop="0">
          Popular Trainer
        </Label>
        <ButtonComponent
          color="#7d7afa"
          border="0"
          width="104px"
          className="position-absolute end-0 top-0"
          margin="8px 10px 22px 0"
          onClick={handleCount}
          bcolor="#fff"
        >
          See details
        </ButtonComponent>
      </div>
      <SliderSlickStyled {...settings}>
        {trainersData.map((el) => {
          return (
            <>
              <CardContentStyled
                className="card text-white d-flex flex-row"
                color="#fff"
              >
                <ImgStyled
                  borderradius="0%"
                  width="20%"
                  className="card-img "
                  src={el.profileimg}
                  alt="Card image"
                  padding="0"
                  height="10%"
                />
                <div class="body">
                  <Label
                    contentHeading
                    color="#4e4473"
                    fontsize="16px"
                    className="card-title"
                    margin="0"
                  >
                    {el.name}
                  </Label>
                  <Label
                    spantext
                    className="card-text"
                    color="#bfbbcd"
                    padding="0"
                    margin="0"
                    fontsize="12px"
                  >
                    {el.profession}
                  </Label>
                  {/* <span class="material-icons material-icons-outlined">
                    perm_contact_calendar
                  </span> */}
                  <Label
                    spantext
                    className="card-text"
                    color="#bfbbcd"
                    padding="0"
                    margin="0"
                    fontsize="12px"
                  >
                    {el.following}
                  </Label>
                </div>
              </CardContentStyled>
              <ButtonComponent
                className="btn btn-secondary"
                padding="10px 40px"
                bcolor="#6967fa"
                border="0"
                margin="0 12px"
                fontsize="12px"
              >
                See Profile
              </ButtonComponent>
              <ButtonComponent
                className=""
                // padding="17px 40px"
                // bcolor="#6967fa"
                border="0"
                // margin="0 12px"
                // fontsize="12px"
                color="#c8cada"
              >
                <span class="material-icons material-icons-outlined">sms</span>
              </ButtonComponent>
            </>
          );
        })}
      </SliderSlickStyled>
      <PopUpForDashboard
        count={count}
        trainerPanel
        canClicked={canClicked}
        // top="10%"
        // gridheight="auto"
        top="5%"
        gridheight="400px"
        wrapperpadding="0 14px"
      />
    </>
  );
}

export default PopularTrainer;
