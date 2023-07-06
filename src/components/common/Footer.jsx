import React from "react";
import Label from "./Label";
import PageLink from "./PageLink";
import styled from "@emotion/styled";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import {
  Instagram,
  Youtube,
  Twitter,
  Linkedln,
  AppStore,
  GooglePlay,
} from "../svgs/index";

const CopyRightStyled = styled.div`
  padding: 30px 0;
  text-align: center;
`;

function Footer() {
  return (
    <>
      <div className="wrapper d-flex justify-content-between flex-column flex-md-row">
        <div className="logo">
          <Label heading color="#ff6a4f" fontsize="30px">
            C<LocalFireDepartmentIcon fontSize="30px" />
            RENERGY
          </Label>
          <p>
            <PageLink buttoncolor="#5f6f7d" fontsize="15px" padding="0">
              About us
            </PageLink>
          </p>
          <p>
            <PageLink buttoncolor="#5f6f7d" fontsize="15px" padding="0">
              Blog
            </PageLink>
          </p>
          &nbsp;
          <Instagram />
          &nbsp;&nbsp;
          <Youtube />
          &nbsp;&nbsp;
          <Twitter />
          &nbsp;&nbsp;
          <Linkedln />
        </div>
        <div className="programs">
          <Label headingsecond color="#0d2740" fontsize="28px">
            Programs
          </Label>
          <p>
            <PageLink buttoncolor="#5f6f7d" fontsize="15px" padding="0">
              Our programs
            </PageLink>
          </p>
          <p>
            <PageLink buttoncolor="#5f6f7d" fontsize="15px" padding="0">
              Our Plan
            </PageLink>
          </p>
          <p>
            <PageLink buttoncolor="#5f6f7d" fontsize="15px" padding="0">
              Become a member
            </PageLink>
          </p>
        </div>
        <div className="support">
          <Label headingsecond color="#0d2740" fontsize="28px">
            Support
          </Label>
          <p>
            <PageLink buttoncolor="#5f6f7d" fontsize="15px" padding="0">
              FAQs
            </PageLink>
          </p>
          <p>
            <PageLink buttoncolor="#5f6f7d" fontsize="15px" padding="0">
              Contact us
            </PageLink>
          </p>
        </div>
        <div className="downloads">
          <Label headingsecond color="#0d2740" fontsize="28px">
            Download our app
          </Label>
          <p>
            <PageLink>
              <GooglePlay />
            </PageLink>
          </p>
          <p>
            <PageLink>
              <AppStore />
            </PageLink>
          </p>
        </div>
      </div>
      <CopyRightStyled>
        <PageLink buttoncolor="#a3abb4" fontsize="15px" padding="0">
          Privacy Policy
        </PageLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <PageLink buttoncolor="#a3abb4" fontsize="15px" padding="0">
          Condition of Use
        </PageLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <PageLink buttoncolor="#a3abb4" fontsize="15px" padding="0">
          @2020, corenergy.com
        </PageLink>
      </CopyRightStyled>
    </>
  );
}

export default Footer;
