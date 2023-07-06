import React from "react";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

const FormInputStyled = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-right: ${(props) => props.paddingright};
  font-size: ${(props) => props.fontSize || "12px"};
  border: ${(props) => props.border};
  background: none;
  border-radius: ${(props) => props.borderradius || "7px"};
  outline:${(props) => props.outline || "unset"} 
  margin-top: 12px;
  border-bottom: ${(props) => props.borderb};
  margin: ${(props) => props.margin || "50px 0 0"};
  background-color : ${(props) => props.bcolor};
  box-shadow :${(props) => props.boxshadow};
  padding: ${(props) => props.padding};
  outline-style : unset;

  @media (max-width: 768px) {
      width: ${(props) => props.responsivewidth};
      padding: ${(props) => props.responsivepadding};
  }


  &::placeholder {
    
    font-weight: ${(props) => props.placeholderweight};
    font-size: ${(props) => props.placeholderfontsize};
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #bdbfc4;
  }
  &:focus,
  &:hover {
    // border-bottom: 1px ridge #7a7a7a;
    // border-bottom: 1px solid;
    // border-color: rgba(0, 0, 0, 0.12);
  }
`;

const FormInputs = ({
  paddingright = "",
  className = "",
  type = "",
  placeholder = "Write something",
  height = "",
  width = "",
  placeholderweight = "",
  placeholderfontsize = "",
  margin = " ",
  onChange,
  value = "",
  borderb = "",
  name = "",
  defaultValue = "",
  border = "",
  outline = "",
  borderradius = "",
  fontSize = "",
  bcolor = "",
  boxshadow = "",
  padding = "",
  responsivewidth = "",
  responsivepadding = "",
}) => {
  return (
    <FormInputStyled
      type={type}
      placeholder={placeholder}
      height={height}
      width={width}
      placeholderweight={placeholderweight}
      placeholderfontsize={placeholderfontsize}
      className={`input-field ${className ? className : "message-box"}`}
      onChange={onChange}
      margin={margin}
      value={value}
      borderb={borderb}
      name={name}
      paddingright={paddingright}
      defaultValue={defaultValue}
      outline={outline}
      border={border}
      borderradius={borderradius}
      fontSize={fontSize}
      bcolor={bcolor}
      boxshadow={boxshadow}
      padding={padding}
      responsivewidth={responsivewidth}
      responsivepadding={responsivepadding}
    ></FormInputStyled>
  );
};
export default FormInputs;
