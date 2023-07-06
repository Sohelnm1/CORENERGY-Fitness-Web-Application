import React, { useState } from "react";
import PageLink from "./PageLink";
import styled from "@emotion/styled";
import MaterialIcon from "./MaterialIcon";
// import SideBarcss from "../../css/SideBarcss.css";
import LinkRoute from "./LinkRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import Label from "./Label";

const SideBarStyled = styled.div`
  // width: 50px;
  // position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  overflow: visible;
  z-index: 1030;
  transition: all 0.3s ease;
  background: #ffffff;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.06);
  @media (max-width: 1199px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
`;

const UlStyled = styled.ul`
  list-style: none;
  padding: 7px;
  margin: 0;
`;

const ImgStyled = styled.img`
  border-radius: 50%;
  width: 60px;
  // display: block;
  max-width: 100%;
  height: auto;
  padding: 8px 0;
`;

function SideBar() {
  const handleClick = (e) => {
    localStorage.clear();
  };

  return (
    <SideBarStyled>
      {/* <UlStyled> */}
      <LinkRoute to="/">
        <ImgStyled
          src="https://media.istockphoto.com/id/1176363686/vector/smiling-young-asian-girl-profile-avatar-vector-icon.jpg?s=612x612&w=0&k=20&c=QuyZJNKexFQgDPr9u91hKieWKOYbaFxPb0b0gwmd-Lo="
          alt="profile image"
        />
      </LinkRoute>

      <LinkRoute to="/profilepage">
        <Label
          spantext
          color="#fff"
          padding="15px"
          bradius="50%"
          width="56px"
          bcolor="#201b3a"
          display="inline-block"
          textalign="center"
          margin="8px 0"
        >
          AB
        </Label>
      </LinkRoute>

      <LinkRoute to="/" handleClick={handleClick}>
        <MaterialIcon
          fontsize="43px"
          color="#fff"
          bcolor="#706dfa"
          borderRadius="50%"
          iconpadding="6px"
          padding="0"
          margin="8px 0"
        >
          add
        </MaterialIcon>
      </LinkRoute>
      {/* </UlStyled> */}
    </SideBarStyled>
  );
}

export default SideBar;
