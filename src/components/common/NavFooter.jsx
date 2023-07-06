import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "@emotion/styled";
import PageLink from "./PageLink";
import MaterialIcon from "./MaterialIcon";
import DropDowncom from "../form/DropDowncom";
import ButtonCom from "../common/ButtonComponent";
// import NavFooter from "../../css/NavFooter.css";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import "bootstrap/dist/js/bootstrap.js";
import Label from "./Label";
import FormInputs from "../form/FormInputs";
import PopUpModel from "./PopUpModel";

const LogoStyled = styled.div`
  padding: 20px 0;
`;

const navProgramDropDown = [
  { id: 1, value: "Programs" },
  { id: 2, value: "Programs" },
  { id: 3, value: "Programs" },
  { id: 4, value: "Programs" },
];

const navAboutDropDown = [
  { id: 1, value: "About" },
  { id: 2, value: "Programs" },
  { id: 3, value: "Programs" },
  { id: 4, value: "Programs" },
];

function Nav({ backcolor = "" }) {
  const [count, setCount] = useState(0);

  const signInHandle = () => {
    setCount(1);
  };

  const handleSubmit = () => {
    setCount(1);
  };

  const handleCancel = () => {
    setCount(0);
  };

  return (
    <>
      <LogoStyled
        backcolor={backcolor}
        className="container d-flex justify-content-between flex-column flex-lg-row align-items-center"
      >
        <div className="className">
          <ButtonCom
            bcolor="#fff"
            padding="17px 28px"
            borderradius="7px"
            border="none"
            color="#20374f"
            transformhover="none"
          >
            Home
          </ButtonCom>
          <DropDowncom
            options={navProgramDropDown}
            padding="0 28px"
            color="#20374f"
          />
          <DropDowncom
            options={navAboutDropDown}
            padding="0 28px"
            color="#20374f"
          />
          <ButtonCom
            bcolor="#fff"
            padding="17px 28px"
            borderradius="7px"
            border="none"
            color="#20374f"
            transformhover="none"
          >
            Blogs
          </ButtonCom>
        </div>
        <Label heading color="#ff6a4f" fontsize="30px">
          C<LocalFireDepartmentIcon fontSize="30px" />
          RENERGY
        </Label>
        <div className="Sign-in">
          <ButtonCom
            bcolor="#fff"
            padding="17px 28px"
            borderradius="7px"
            border="none"
            color="#20374f"
            onClick={signInHandle}
            transformhover="none"
          >
            Sign in
          </ButtonCom>
          <ButtonCom
            bcolor="#FF7043"
            padding="12px 28px"
            borderradius="10px"
            border="none"
            color="#fff"
            boxshadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            hovercolor="#fff"
          >
            Become Member
          </ButtonCom>
        </div>
      </LogoStyled>
      <PopUpModel
        count={count}
        onClick={handleSubmit}
        cancelPopup={handleCancel}
      />
    </>
  );
}
export default Nav;
