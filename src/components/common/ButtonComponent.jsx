import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontsize};
  line-height: ${(props) => props.lineheight};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bcolor};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderradius};
  border: ${(props) => props.border};
  transform: ${(props) => props.transform};
  transition: ${(props) => props.transition};
  box-shadow: ${(props) => props.boxshadow};
  width: ${(props) => props.width};
  float: ${(props) => props.float};

  @media (max-width: 768px) {
    padding: ${(props) => props.responsivepadding};
    font-size: ${(props) => props.responsivefont};
  }

  &:hover,
  :active,
  :focus {
    background-color: ${(props) => props.hoverbcolor};
    color: ${(props) => props.hovercolor || "#e5384f"};
    transform: ${(props) => props.transformhover || "scale(1.05)"};
  }
`;

const ButtonComponent = ({
  type = "",
  text = "",
  className = "",
  weight = "",
  fontsize = "",
  padding = "",
  margin = "",
  onClick = "",
  bcolor = " ",
  borderradius = "",
  color = "",
  children,
  border = "",
  transform = "",
  transition = "",
  hoverbcolor = "",
  paddinghover = "",
  boxshadow = "",
  transformhover = "",
  hovercolor = "",
  width = "",
  responsivepadding = "",
  responsivefont = "",
  float = "",
}) => {
  return (
    <ButtonStyled
      text={text}
      border={border}
      className={className}
      type={type}
      fontsize={fontsize}
      weight={weight}
      padding={padding}
      margin={margin}
      onClick={onClick}
      bcolor={bcolor}
      borderradius={borderradius}
      color={color}
      transform={transform}
      transition={transition}
      hoverbcolor={hoverbcolor}
      paddinghover={paddinghover}
      boxshadow={boxshadow}
      transformhover={transformhover}
      hovercolor={hovercolor}
      width={width}
      responsivepadding={responsivepadding}
      responsivefont={responsivefont}
      float={float}
    >
      {children}
    </ButtonStyled>
  );
};

export default ButtonComponent;
