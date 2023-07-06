import React from "react";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageStyled = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border || "0"};
  border-radius: ${(props) => props.bradius};
  position: ${(props) => props.position};
  box-shadow: ${(props) => props.boxshadow};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  float: ${(props) => props.float};
  @media (max-width: 768px) {
    width: ${(props) => props.responsivewidth};
  }
`;

function CardImageOverlay({
  imgsrc = "",
  alt = "",
  width = "",
  height = "",
  position = "",
  border = "",
  bradius = "",
  boxshadow = "",
  top = "",
  left = "",
  className = "",
  float = "",
  index,
  value,
  responsivewidth = "",
}) {
  return (
    <ImageStyled
      position={position}
      class="card-img"
      src={imgsrc}
      alt={alt}
      width={width}
      height={height}
      border={border}
      bradius={bradius}
      boxshadow={boxshadow}
      top={top}
      left={left}
      className={className}
      float={float}
      responsivewidth={responsivewidth}
    />
  );
}

export default CardImageOverlay;
