import React, { useEffect, useState } from "react";
import Label from "./Label";
import FormInputs from "../form/FormInputs";
import styled from "@emotion/styled";
import ButtonComponent from "./ButtonComponent";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CloseIcon from "@mui/icons-material/Close";
import ErrorMsg from "../form/ErrorMsg";
import { set, useForm } from "react-hook-form";

import {
  Instagram,
  Youtube,
  Twitter,
  Linkedln,
  AppStore,
  GooglePlay,
} from "../svgs/index";
import { useNavigate } from "react-router-dom";

const PopUpModelStyled = styled.div`
  padding: 20px 15px 30px;
  width: 30%;
  height: 500px;
  border: none;
  border-radius: 12px;
  position: ${(props) => props.position || "fixed"};
  z-index: 1001;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: ${(props) =>
    props.boxshadow || "0px 0px 22px rgba(0, 0, 0, 0.08)"};
  backdrop-filter: blur(10px);
  left: 50%;
  transform: ${(props) => props.transformt || "translateX(-50%)"};

  &.animantionClass {
    animation: move 0.7s linear;
    @keyframes move {
      0% {
        transform: translate(-50%, 150%);
        opacity: 0;
      }
      50% {
        transform: translate(-50%, 75%);
        opacity: 0;
      }
      100% {
        transform: translate(-50%, 0%);
        opacity: 1;
      }
    }
  }
`;

const SocialStyled = styled.div`
  padding: 28px 0 0 0;
`;

function PopUpModel({ count = "", cancelPopup = "" }) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(1);

  const [error, setError] = useState(false);

  const [formerror, setFormError] = useState(false);

  const [storeddata, setStoredData] = useState({
    userid: "sohel",
    password: "sohel",
  });

  const [inputdata, setInputData] = useState({
    userid: "",
    password: "",
  });

  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  let name, value;
  const handleInput = (e) => {
    setFormError(false);
    name = e.target.name;
    value = e.target.value;
    setInputData({ ...inputdata, [name]: value });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (inputdata.userid.length === 0 || inputdata.password.length === 0) {
      setError(true);
    } else {
      if (
        storeddata.userid === inputdata.userid &&
        storeddata.password === inputdata.password
      ) {
        setauthenticated(true);
        localStorage.setItem("authenticated", true);
        navigate("/profilepage");
      } else {
        setFormError(true);
      }
    }
  };

  const sucussfulClick = () => {};

  return (
    <>
      <div className="popup-wrapper" hidden={count !== index}>
        {count === index && (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <PopUpModelStyled className="animantionClass popup-model d-flex justify-content-center align-items-center flex-column mx-auto gap-3">
                <ButtonComponent
                  className="position-absolute top-0 end-0"
                  color="#e5384f"
                  bcolor="rgba(255, 255, 255, 0.7)"
                  border="0"
                  padding="11px"
                  borderradius="50%"
                  transformhover="rotate(180deg)"
                  transition="all .25s ease-in-out"
                  onClick={cancelPopup}
                >
                  <CloseIcon fill="#ff6a4f"></CloseIcon>
                </ButtonComponent>
                <Label
                  headingsecond
                  color="#ff6a4f"
                  border="1px solid"
                  borderRadius="23px"
                  padding="12px 22px"
                >
                  C<LocalFireDepartmentIcon fontSize="30px" />
                  RENERGY
                </Label>
                <Label heading color="#ff6a4f">
                  Sign In
                </Label>
                <FormInputs
                  type="text"
                  placeholder="Enter login id"
                  border="1px solid #ff6a4f"
                  // borderb="1px ridge #7a7a7a"
                  width="65%"
                  height="50px"
                  bcolor="#fff"
                  padding="8px 12px"
                  onChange={handleInput}
                  name="userid"
                  value={inputdata.userid}
                  // {...register("userid")}
                />
                {error && inputdata.userid.length <= 0 ? (
                  <ErrorMsg
                    color="#ff6a4f"
                    labeldata="please enter some data"
                  />
                ) : (
                  ""
                )}
                <FormInputs
                  type="password"
                  placeholder="Enter Password"
                  border="1px solid #ff6a4f"
                  width="65%"
                  height="50px"
                  bcolor="#fff"
                  padding="8px 12px"
                  onChange={handleInput}
                  name="password"
                  value={inputdata.password}
                  // {...register("password")}
                />
                {error && inputdata.password.length <= 0 ? (
                  <ErrorMsg
                    color="#ff6a4f"
                    labeldata="Please enter some data"
                  />
                ) : (
                  ""
                )}
                {formerror && (
                  <ErrorMsg labeldata="Invalid login password" color="red" />
                )}

                <ButtonComponent
                  type="submit"
                  className="btn btn-secondary"
                  padding="19px 38px"
                  color="#fff"
                  bcolor="#ff7a5f"
                  border="none"
                  onClick={sucussfulClick}
                  hoverbcolor="#ff7a5f"
                  hovercolor="#fff"
                >
                  {/* <LinkRoute to={sucesslink}> */}
                  Continue
                  {/* </LinkRoute> */}
                </ButtonComponent>

                <SocialStyled className="social-links">
                  <Instagram fill="#ff6552" />
                  &nbsp;&nbsp;
                  <Youtube fill="#ff6552" />
                  &nbsp;&nbsp;
                  <Twitter fill="#ff6552" />
                  &nbsp;&nbsp;
                  <Linkedln fill="#ff6552" />
                </SocialStyled>
              </PopUpModelStyled>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default PopUpModel;
