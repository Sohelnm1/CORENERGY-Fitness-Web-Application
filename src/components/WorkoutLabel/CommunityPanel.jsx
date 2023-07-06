import React from "react";
import Label from "../common/Label";
import AccordionItem from "../common/AccordionItem";
import styled from "@emotion/styled";

const ImgStyled = styled.img`
  border-radius: 50%;
  width: 33px;
  max-width: 100%;
  height: auto;
  // padding: 8px 0;
  padding-right: 3px;
`;

// const [initial, setInitials] = {
//   key1: "",
//   key2: "",
//   key3: "",
// };

const CommonStyle = {
  // padding: 6px;
  // border-radius: 50%;
  // width: 35px;
  // display: inline-block;
};

const CommunityData = [
  {
    key: 1,
    value: "Lazy Guys Community",
    initial: "LGC",
    color: "#9a95fb",
    bcolor: "#e8e6fe",
    comments: 18,
  },
  {
    key: 2,
    value: "Obe Fitness Lovers",
    initial: "OFL",
    color: "#83a8fc",
    bcolor: "#e4ecfe",
    comments: 8,
  },
  {
    key: 3,
    value: "Fit's Guys as Always",
    initial: "FGA",
    color: "#72c7fd",
    bcolor: "#e3f4fe",
    comments: 6,
  },
];

function CommunityPanel() {
  //   var name = "John Doe";

  //   var getInitials = function (name) {
  //     var parts = name.split(" ");
  //     var initials = "";
  //     for (var i = 0; i < parts.length; i++) {
  //       if (parts[i].length > 0 && parts[i] !== "") {
  //         initials += parts[i][0];
  //       }
  //     }
  //     return initials;
  //   };

  // alert(getInitials(name));

  //   console.log(name);

  return (
    <Label headingthird color="#b9c6d7" fontsize="16px" padding="35px">
      COMMUNITY
      {CommunityData.map((itr) => {
        return (
          <Label
            contentHeading
            key={itr.key}
            color="#6b648c"
            fontsize="12px"
            margin="15px 0 0 0"
            className="position-relative"
          >
            <Label
              spantext
              color={itr.color}
              bcolor={itr.bcolor}
              padding="6px"
              bradius="50%"
              width="35px"
              display="inline-block"
            >
              {itr.initial}
            </Label>
            {itr.value}
            <Label
              spantext
              color="#fd7984"
              padding="1px"
              bradius="50%"
              width="24px"
              display="inline-block"
              bcolor="#fbe3e5"
              textalign="center"
              float="right"
              className="position-absolute end-0 top-0"
            >
              {itr.comments}
            </Label>
          </Label>
        );
      })}
    </Label>
  );
}
// padding: 6px;
// border-radius: 50%;
// width: 35px;
// display: inline-block;

export default CommunityPanel;
