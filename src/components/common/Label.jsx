import React, { Children } from "react";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

const LabelHeading = styled.h1`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontsize};
  line-height: ${(props) => props.lineheigth};
  color: ${(props) => props.color || "black"};
  position: ${(props) => props.position};
  margin-top: ${(props) => props.margintop || "18px"};
  margin-bottom: ${(props) => props.marginbottom || "22px"};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textalign || "left"};

  @media (max-width: 1024px) {
    font-size: ${(props) => props.responsivefont};
  }
  @media (max-width: 768px) {
    margin-top: ${(props) => props.responsivemargintop};
  }
`;

const LabelHeadingSecond = styled.h2`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontsize};
  line-height: ${(props) => props.lineheigth};
  color: ${(props) => props.color || "black"};
  position: ${(props) => props.position};
  margin-top: ${(props) => props.margintop || "18px"};
  margin-bottom: ${(props) => props.marginbottom || "22px"};
  text-align: ${(props) => props.textalign || "left"};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bcolor};
`;

const LabelHeadingThird = styled.h3`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontsize};
  line-height: ${(props) => props.lineheigth};
  color: ${(props) => props.color || "black"};
  position: ${(props) => props.position};
  padding-right: ${(props) => props.paddingright};
  margin-top: ${(props) => props.margintop || "6px"};
  margin-bottom: ${(props) => props.marginbottom || "6px"};
  text-align: ${(props) => props.textalign || "left"};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
`;

const LabelPara = styled.p`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontsize};
  line-height: 22px;
  letter-spacing: 0.02em;
  color: ${(props) => props.color || "black"};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textalign || "left"};
  background-color: ${(props) => props.bcolor};

  @media (max-width: 768px) {
    padding: ${(props) => props.responsivepadding};
  }
`;

const LabelParaspan = styled.span`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontsize};
  line-height: 22px;
  letter-spacing: 0.02em;
  color: ${(props) => props.color || "black"};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border || "0"};
  border-radius: ${(props) => props.bradius};
  position: ${(props) => props.position};
  box-shadow: ${(props) => props.boxshadow};
  background-color: ${(props) => props.bcolor};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  text-align: ${(props) => props.textalign};
  float: ${(props) => props.float};
  backdrop-filter: ${(props) => props.backfilter};
`;

const Label = ({
  heading = false,
  spantext = false,
  content = "",
  contentHeading = false,
  headingthird = false,
  color = "",
  fontsize = "",
  weight = "",
  position = "",
  textalign = "",
  margin = "",
  headingsecond = false,
  className = "",
  id = "",
  children,
  lineheigth = "",
  marginbottom = "",
  paddingright = "",
  width = "",
  padding = "",
  border = "",
  bradius = "",
  boxshadow = "",
  bcolor = "",
  right = "",
  bottom = "",
  top = "",
  left = "",
  margintop = "",
  borderRadius = "",
  display = "",
  float = "",
  backfilter = "",
  responsivefont = "",
  responsivemargintop = "",
  responsivepadding = "",
}) => {
  if (heading) {
    return (
      // <div className="container">
      <LabelHeading
        color={color}
        fontsize={fontsize}
        weight={weight}
        position={position}
        textalign={textalign}
        className={className}
        id={id}
        content={content}
        lineheigth={lineheigth}
        padding={padding}
        margintop={margintop}
        marginbottom={marginbottom}
        responsivefont={responsivefont}
        responsivemargintop={responsivemargintop}
      >
        {children}
      </LabelHeading>
      // </div>
    );
  }

  if (headingsecond) {
    return (
      <LabelHeadingSecond
        color={color}
        fontsize={fontsize}
        weight={weight}
        position={position}
        textalign={textalign}
        margin={margin}
        className={className}
        id={id}
        content={content}
        lineheigth={lineheigth}
        margintop={margintop}
        marginbottom={marginbottom}
        padding={padding}
        borderRadius={borderRadius}
        border={border}
        bcolor={bcolor}
      >
        {children}
      </LabelHeadingSecond>
    );
  }

  if (headingthird) {
    return (
      <LabelHeadingThird
        color={color}
        fontsize={fontsize}
        weight={weight}
        position={position}
        textalign={textalign}
        margin={margin}
        className={className}
        lineheigth={lineheigth}
        id={id}
        marginbottom={marginbottom}
        paddingright={paddingright}
        width={width}
        margintop={margintop}
        padding={padding}
      >
        {children}
      </LabelHeadingThird>
    );
  }

  if (contentHeading)
    return (
      <LabelPara
        color={color}
        fontsize={fontsize}
        weight={weight}
        textalign={textalign}
        className={className}
        margin={margin}
        padding={padding}
        bcolor={bcolor}
        responsivepadding={responsivepadding}
      >
        {children}
        {content}
      </LabelPara>
    );
  if (spantext)
    return (
      <LabelParaspan
        width={width}
        display={display}
        color={color}
        fontsize={fontsize}
        weight={weight}
        textalign={textalign}
        className={className}
        margin={margin}
        padding={padding}
        border={border}
        bradius={bradius}
        boxshadow={boxshadow}
        bcolor={bcolor}
        right={right}
        bottom={bottom}
        top={top}
        left={left}
        float={float}
        backfilter={backfilter}
        responsivepadding={responsivepadding}
      >
        {children}
      </LabelParaspan>
    );
};

export default Label;
