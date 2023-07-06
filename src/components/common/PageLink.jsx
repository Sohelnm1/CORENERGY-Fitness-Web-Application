import React from "react";
import styled from "@emotion/styled";

const AnchorStyled = styled.a`
  padding: ${(props) => props.padding || "11px 22px"};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textalign || "left"};
  color: ${(props) => props.buttoncolor || "#fff"};
  border: ${(props) => props.borderbutton};
  border-color: ${(props) => props.bordercolor};
  text-decoration: none;
  font-size: ${(props) => props.fontsize};
  background-color: ${(props) => props.buttonbackcolor};
  border-radius: ${(props) => props.anchorradius};

  &:hover {
    color: #ff7e5c;
    // border-radius: 50%;
    // background: hsla(0, 0%, 100%, 0.25);
    transition: all 0.25s ease;
    transform-origin: 90px 90px;
  }
`;

const PageLink = ({
  link = "",
  className = "",
  children,
  buttoncolor = "",
  padding = "",
  margin = "",
  fontsize = "",
  value = "",
  index = "",
  textalign = "",
  borderbutton = "",
  bordercolor = "",
  buttonbackcolor = "",
  anchorradius = "",
}) => {
  return (
    <AnchorStyled
      // target="_blank"
      rel="noreferrer"
      href={link}
      fontsize={fontsize}
      className={className}
      buttoncolor={buttoncolor}
      padding={padding}
      margin={margin}
      value={value}
      index={index}
      textalign={textalign}
      borderbutton={borderbutton}
      bordercolor={bordercolor}
      buttonbackcolor={buttonbackcolor}
      anchorradius={anchorradius}
    >
      {children}
    </AnchorStyled>
  );
};

export default PageLink;
