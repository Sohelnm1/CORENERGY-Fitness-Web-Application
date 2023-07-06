import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Label from "../common/Label";
import Slider from "react-slick";
import styled from "@emotion/styled";
import MaterialIcon from "../common/MaterialIcon";
import ButtonComponent from "../common/ButtonComponent";
import PopUpForDashboard from "../common/PopUpForDashboard";
import { yogaData } from "../../data/JsonData";

const CardContentStyled = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 8px;
  padding: 12px;
  gap: 12px;
  margin: 12px 0;
  width: 90%;
  border: 0;
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

const ProfileCardStyled = styled.div`
  top: 135px;
`;

// const yogaData = [
//   {
//     key: 1,
//     headingtext: "Advance Flow Yoga",
//     description:
//       "Advance Flow Yoga is the basics, powered up. Step in for this longer",
//     img: "https://images.pexels.com/photos/8172941/pexels-photo-8172941.jpeg?auto=compress&cs=tinysrgb&w=600",
//     profileimg:
//       "https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png",
//     duration: "1hr 25m",
//   },
//   {
//     key: 2,
//     headingtext: "Aqua Fit Class",
//     description:
//       "Challenge your whole body when you work out in a pool. The water will...",
//     img: "https://images.pexels.com/photos/4057839/pexels-photo-4057839.jpeg?auto=compress&cs=tinysrgb&w=600",
//     profileimg:
//       "https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png",
//     duration: "1hr 25m",
//   },
//   {
//     key: 3,
//     headingtext: "Aerial Flow Yoga",
//     description:
//       "Elevate your practice with Aerial Yoga. The entire class takes place mid-air...",
//     img: "https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=600",
//     profileimg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU",
//     duration: "1hr 25m",
//   },
//   {
//     key: 4,
//     headingtext: "X Blast Wokrout Class",
//     description:
//       "Get Stronger in less than 30 minutes. This high-energy cross training ...",
//     img: "https://images.pexels.com/photos/3150250/pexels-photo-3150250.jpeg?auto=compress&cs=tinysrgb&w=600",
//     profileimg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxapDwCeVLL0T69nhwV_BgqH9lztNDYQGhCbUVKHMgITKzGDlPsa55HS-6dqUdC8Qt5VU&usqp=CAU",
//     duration: "1hr 25m",
//   },
//   {
//     key: 5,
//     headingtext: "Advance Flow Yoga",
//     description:
//       "Advance Flow Yoga is the basics, powered up. Step in for this longer",
//     img: "https://images.pexels.com/photos/3658399/pexels-photo-3658399.jpeg?auto=compress&cs=tinysrgb&w=600",
//     profileimg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29IJ8KCmCFp4SZU-npyzA_axjUuDu3IYgcklwMcwImCdooBMPyim1ycUr5g5G_0YmnIk&usqp=CAU",
//     duration: "1hr 25m",
//   },
//   {
//     key: 6,
//     headingtext: "Advance Flow Yoga",
//     description:
//       "Advance Flow Yoga is the basics, powered up. Step in for this longer",
//     img: "https://images.pexels.com/photos/3820393/pexels-photo-3820393.jpeg?auto=compress&cs=tinysrgb&w=600",
//     profileimg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29IJ8KCmCFp4SZU-npyzA_axjUuDu3IYgcklwMcwImCdooBMPyim1ycUr5g5G_0YmnIk&usqp=CAU",
//     duration: "1hr 25m",
//   },
//   {
//     key: 7,
//     headingtext: "Aerial Flow Yoga",
//     description:
//       "Elevate your practice with Aerial Yoga. The entire class takes place mid-air...",
//     img: "https://images.pexels.com/photos/6698513/pexels-photo-6698513.jpeg?auto=compress&cs=tinysrgb&w=600",
//     profileimg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU",
//     duration: "0hr 40m",
//   },
//   {
//     key: 8,
//     headingtext: "X Blast Wokrout Class",
//     description:
//       "Get Stronger in less than 30 minutes. This high-energy cross training ...",
//     img: "https://images.pexels.com/photos/5384538/pexels-photo-5384538.jpeg?auto=compress&cs=tinysrgb&w=600",
//     profileimg:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU",
//     duration: "2hr 36m",
//   },
// ];

function YourClassList({
  borderradius = "",
  width = "",
  display = "",
  maxwidth = "",
  height = "",
  padding = "",
}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: 2000,
    arrows: false,
    rtl: false,

    responsive: [
      {
        breakpoint: 520,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
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
      <Label
        headingsecond
        color="#221b56"
        fontsize="20px"
        margintop="0"
        marginbottom="0
        "
      >
        Your Class List
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
      <SliderSlickStyled {...settings}>
        {yogaData.map((el) => {
          return (
            <>
              <CardContentStyled
                className="card text-white position-relative"
                color="#fff"
              >
                <ImgStyled
                  borderradius="0%"
                  width="100%"
                  className="card-img "
                  src={el.img}
                  alt="Card image"
                />

                <ProfileCardStyled className="card-img-overlay position-absolute">
                  <ImgStyled
                    padding="0"
                    className="d-inline "
                    src={el.profileimg}
                    alt="Card image"
                    // margin="126px 0 0 10px"
                  />
                  <Label
                    className="card-text"
                    spantext
                    bcolor="rgba(255, 255, 255, 0.7)"
                    backfilter="blur(10px)"
                    padding="1px"
                    bradius="23% 23% 23% 23%"
                    float="right"
                    // margin="124px 10px 0 0px"
                    fontsize="12px"
                  >
                    {el.duration}
                  </Label>
                </ProfileCardStyled>
                <div class="body">
                  <Label
                    contentHeading
                    color="#4e4473"
                    fontsize="16px"
                    className="card-title"
                  >
                    {el.headingtext}
                  </Label>
                  <Label
                    contentHeading
                    className="card-text"
                    color="#bfbbcd"
                    padding="0"
                    margin="0"
                  >
                    {el.description}
                  </Label>
                </div>
              </CardContentStyled>
            </>
          );
        })}
      </SliderSlickStyled>
      <PopUpForDashboard
        count={count}
        yogaPanel
        canClicked={canClicked}
        top="10%"
        gridheight="500px"
        wrapperpadding=""
        topmobile="1%"
      />
    </>
  );
}

export default YourClassList;
