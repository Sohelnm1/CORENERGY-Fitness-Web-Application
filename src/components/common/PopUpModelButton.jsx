import React from "react";
import styled from "@emotion/styled";

const WrapperStyled = styled.div`
  border: 1px solid black;
  border-radius: 7px;
  width: 28%;
  position: absolute;
  z-index: 0;
  background-color: #fff;
`;

function PopUpModelButton() {
  return (
    <>
      <WrapperStyled>
        <h1> test </h1>
      </WrapperStyled>
    </>
  );
}

export default PopUpModelButton;
