import React, { Children } from "react";
import styled from "@emotion/styled";
import Label from "./Label";
import PageLink from "../common/PageLink";
import MaterialIcon from "./MaterialIcon";

const CardStyled = styled.div`
  width: ${(props) => props.width || "50%"};
  padding: ${(props) => props.padding || "30px 0"};
  background-color: ${(props) => props.bcolor};
  border-radius: ${(props) => props.borderradius};
  border: ${(props) => props.border};

  .cards-display-hidden : {
    display: none;
  }

  &:hover {
    background: ${(props) => props.hoverbcolor};
    color: "#e5384f";
    transform: ${(props) => props.transformhover || "scale(1.05)"};
    box-shadow: ${(props) => props.boxshadow};
    transition: 250ms all ease;
  }
  @media (max-width: 768px) {
    width: ${(props) => props.responsivewidth};
    padding: ${(props) => props.responsivepadding};
  }
`;

function CardTemp({
  headtext = "",
  paragraphtext = "",
  link = "",
  linktext = "",
  padding = "",
  bcolor = "",
  color = "",
  borderradius = "",
  border = "",
  hoverbcolor = "",
  transformhover = "",
  boxshadow = "",
  textalign = "",
  className = "",
  fontsize = "",
  icontext = "",
  textalignicon = "",
  paddinglearmore = "",
  bordercolor = "",
  borderbutton = "",
  buttoncolor = "",
  buttonbackcolor = "",
  anchorradius = "",
  headcolor = "",
  paragraphcolor = "",
  responsivewidth = "",
  responsivepadding = "",
  width = "",
}) {
  return (
    <CardStyled
      className="card"
      padding={responsivepadding}
      bcolor={bcolor}
      borderradius={borderradius}
      border={border}
      boxshadow={boxshadow}
      responsivewidth={responsivewidth}
      width={width}
    >
      <MaterialIcon
        color={color}
        padding={padding}
        fontsize={fontsize}
        textalignicon={textalignicon}
      >
        {icontext}
      </MaterialIcon>
      <div className="card-body d-flex flex-wrap justify-content-center">
        <Label headingthird textalign={textalign} color={headcolor}>
          {headtext}
        </Label>
        <Label contentHeading textalign={textalign} color={paragraphcolor}>
          {paragraphtext}
        </Label>

        <PageLink
          className="cards-display-hidden"
          link={link}
          textalign={textalign}
          paddinglearmore={paddinglearmore}
          bordercolor={bordercolor}
          borderbutton={borderbutton}
          buttoncolor={buttoncolor}
          buttonbackcolor={buttonbackcolor}
          anchorradius={anchorradius}
        >
          {linktext}
        </PageLink>
      </div>
    </CardStyled>
  );
}

export default CardTemp;
