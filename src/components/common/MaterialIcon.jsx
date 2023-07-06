import React from "react";
import PageLink from "./PageLink";
import styled from "@emotion/styled";
// import css from "../../css/MaterialIcon.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LiStyled = styled.li`
  list-style: none;

  padding: ${(props) => props.padding || "10px 5px"};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-align: ${(props) => props.textalignicon};
`;

const MaterialSpanStyled = styled.span`
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bcolor};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textalignicon};
  float: ${(props) => props.float};
`;

function MaterialIcon({
  className = "",
  children,
  color = "",
  padding = "",
  width = "",
  height = "",
  fontsize = "",
  textalignicon = "",
  bcolor = "",
  iconpadding = "",
  borderRadius = "",
  margin = "",
  float = "",
}) {
  return (
    <>
      {/* <LiStyled
        color={color}
        className=""
        padding={padding}
        width={width}
        height={height}
        textalignicon={textalignicon}
      > */}
      <MaterialSpanStyled
        className={`material-icons material-icons-outlined ${
          className ? className : ""
        }`}
        fontsize={fontsize}
        color={color}
        bcolor={bcolor}
        borderRadius={borderRadius}
        padding={iconpadding}
        margin={margin}
        textalignicon={textalignicon}
        float={float}
      >
        {children}
      </MaterialSpanStyled>
      {/* </LiStyled> */}
    </>
  );
}

export default MaterialIcon;
