import React from "react";
import Label from "../common/Label";
import styled from "@emotion/styled";
import AccordionItem from "../common/AccordionItem";

const LabelsWrapperStyled = styled.div`
  //   background-color: #332f4c;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(50, 48, 75, 1) 66%
  );
  border-radius: 14px;
  padding: 35px;
  margin-top: -8px;
  box-shadow: 0 10px 25px -24px rgba(0, 0, 0, 0.75);
`;

function WorkoutTime({ options = [] }) {
  return (
    <>
      <LabelsWrapperStyled className="wrapper">
        <Label
          headingthird
          color="#7d7a8c"
          fontsize="16px"
          margintop="10px"
          marginbottom="22px"
        >
          TODAY WORKOUT
        </Label>

        {options.map((el) => {
          return (
            <>
              <Label
                color="#fff"
                contentHeading
                key={el.key}
                className="position-relative"
              >
                {el.key} &nbsp;&nbsp;&nbsp;&nbsp; {el.value}
                <Label
                  color="#fff"
                  spantext
                  className="position-absolute end-0"
                >
                  {el.time}
                </Label>
              </Label>
            </>
          );
        })}
      </LabelsWrapperStyled>
    </>
  );
}

export default WorkoutTime;
