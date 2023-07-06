import React, { useState } from "react";
import { ProfileSlickCalories } from "../WorkoutLabel";
import styled from "@emotion/styled";
import ButtonComponent from "./ButtonComponent";
import { caloriesData, yogaData, trainersData } from "../../data/JsonData";
import Label from "./Label";
import MaterialIcon from "./MaterialIcon";

const PopUpModelStyled = styled.div`
  padding: ${(props) => props.padding || "40px"};
  width: 70%;
  top: ${(props) => props.top || "20%"};
  gap: 30px;
  height: ${(props) => props.height || "auto"};
  border: none;
  border-radius: 12px;
  position: ${(props) => props.position || "fixed"};
  z-index: 1001;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: ${(props) =>
    props.boxshadow || "0px 0px 22px rgba(0, 0, 0, 0.08)"};
  backdrop-filter: blur(10px);
  left: 50%;
  transform: ${(props) => props.transformt || "translateX(-50%)"};
  @media (max-width: 767px) {
    padding: 15px 0;
    top: ${(props) => props.topmobile};
  }

  &.animantionClass {
    animation: move 0.7s linear;
    @keyframes move {
      0% {
        transform: translate(-50%, 150%);
        opacity: 0;
      }
      50% {
        transform: translate(-50%, 75%);
        opacity: 0;
      }
      100% {
        transform: translate(-50%, 0%);
        opacity: 1;
      }
    }
  }
`;

const GridStyled = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  overflow-y: scroll;
  height: ${(props) => props.height};
`;

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

const TrainerDataWrapperStyled = styled.div`
  // border: 2px solid #827dfa;
  // margin: 2px;
`;

function PopUpForDashboard({
  count = "",
  caloriespanel = false,
  canClicked = "",
  yogaPanel = false,
  top = "",
  height = "",
  gridheight = "",
  trainerPanel = false,
  wrapperpadding = "",
  topmobile = "",
}) {
  const [index, setIndex] = useState(1);

  return (
    <>
      {count === index && (
        <>
          <PopUpModelStyled
            className="animantionClass"
            top={top}
            heading={height}
            padding={wrapperpadding}
            topmobile={topmobile}
          >
            <GridStyled className="for-grid " height={gridheight}>
              {caloriespanel && (
                <>
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
                          padding="10px"
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
                </>
              )}
              {yogaPanel && (
                <>
                  {yogaData.map((el) => {
                    return (
                      <>
                        <CardContentStyled
                          className="card text-white"
                          color="#fff"
                        >
                          <ImgStyled
                            borderradius="0%"
                            width="100%"
                            className="card-img "
                            src={el.img}
                            alt="Card image"
                          />

                          <div class="card-img-overlay">
                            <ImgStyled
                              padding="0"
                              className="d-inline "
                              src={el.profileimg}
                              alt="Card image"
                              margin="126px 0 0 10px"
                            />
                            <Label
                              className="card-text"
                              spantext
                              bcolor="rgba(255, 255, 255, 0.7)"
                              backfilter="blur(10px)"
                              padding="1px"
                              bradius="23% 23% 23% 23%"
                              float="right"
                              margin="124px 10px 0 0px"
                              fontsize="12px"
                            >
                              {el.duration}
                            </Label>
                          </div>
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
                </>
              )}
              {trainerPanel && (
                <>
                  {trainersData.map((el) => {
                    return (
                      <>
                        <TrainerDataWrapperStyled>
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
                            padding="11px 40px"
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
                            <span class="material-icons material-icons-outlined">
                              sms
                            </span>
                          </ButtonComponent>
                        </TrainerDataWrapperStyled>
                      </>
                    );
                  })}
                </>
              )}
            </GridStyled>
            <ButtonComponent
              className="btn btn-secondary"
              padding="11px 44px"
              margin="30px 12px"
              bcolor="black"
              color="#fff"
              onClick={canClicked}
            >
              Done here!
            </ButtonComponent>
          </PopUpModelStyled>
        </>
      )}
    </>
  );
}

export default PopUpForDashboard;
