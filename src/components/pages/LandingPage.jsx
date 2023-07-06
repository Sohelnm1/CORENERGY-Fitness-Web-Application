import React from "react";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";
import Label from "../common/Label";
import ButtonCom from "../common/ButtonComponent";
import firstimg from "../../images/firstimg.png";
import secondimg from "../../images/secondimg.png";
import thirdimg from "../../images/thirdimg.png";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import { AppleTv, GooglePlay, AppStore } from "../svgs/index";
import VideoPlayer from "../common/VideoPlayer";
import CardImageOverlay from "../common/CardImageOverlay";
import CardTemp from "../common/CardTemp";
import Landing from "../../css/Landing.css";
import SlickSlider from "../common/SlickSlider";
import FormInputs from "../form/FormInputs";
import Footer from "../common/Footer";
import ChromeCast from "../svgs/ChromeCast";
import PopUpModel from "../common/PopUpModel";
import Nav from "../common/NavFooter";
import ImageTemp from "../common/ImageTemp";
import CoverFlowTemp from "../common/CoverFlowTemp";
import CoverFlowDashboardTemp from "../common/CoverFlowDashboardTemp";

const PageWrapperStyled = styled.div`
  padding: 20px 0;
`;

const WorkOutHomeStyled = styled.div`
  column-gap: 5%;
  margin-bottom: ${(props) => props.marginb};
  padding: 10% 0;
`;

const CardWrapperStyled = styled.div`
  padding: 45px 70px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const stylecommom = {
  border: 0,
  boxshadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  bcolor: "#fff",
  borderradius: "20px",
  textalign: "center",
  fontsize: "80px",
  textalignicon: "center",
  color: "#fdc8af",
  borderbutton: "1px solid #fe8f73",
  buttonbackcolor: "#fff",
  buttoncolor: "#ff7e5c",
  anchorradius: "13px",
  headcolor: "#0c2740",
  paragraphcolor: "#828f9a",
  responsivewidth: "70%",
  responsivepadding: "15px 0",
};

const SubScribeStyled = styled.div`
  background-color: #08243d;
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 110px 0;
  border-radius: 35px;
  @media (max-width: 768px) {
    padding: 50px;
  }
`;

const SponsoredBrandStyled = styled.div`
  padding: 70px 0;
`;

const LandingSectionStyled = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const FeedBackStyled = styled.div``;

function LandingPage({ marginb = "" }) {
  return (
    <>
      <Nav />
      <PageWrapperStyled className="container">
        <LandingSectionStyled className="row ">
          <div className="col-md d-flex justify-content-center align-items-center flex-column d-md-block">
            <Label
              heading
              fontsize="90px"
              color="#0c2841"
              responsivefont="50px"
            >
              Stay at home
            </Label>
            <Label
              heading
              fontsize="90px"
              color="#0c2841"
              responsivefont="50px"
            >
              Stay healthy
            </Label>
            <Label
              contentHeading
              content="Stay in shape even at home. Corenergy will help you to stay healthy
        easily wherever and whenever."
              fontsize="16px"
              padding="20px"
              margin="22px 0"
              color="#5c6c7c"
            />
            <ButtonCom
              bcolor="#FF7043"
              padding="12px 47px"
              borderradius="9px"
              border="none"
              color="#fff"
              margin="0px 28px 0px 0px"
              fontsize="18px"
              boxshadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            >
              Get Started
            </ButtonCom>
            <ButtonCom
              bcolor="#fff"
              padding="18px 28px"
              borderradius="16px"
              border="none"
              color="#0b2740"
              fontsize="18px"
            >
              <PlayCircleIcon
                style={{
                  color: "#FF7043",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                }}
              />
              &nbsp; Watch Video
            </ButtonCom>
          </div>

          <div className="col-md d-flex justify-content-center align-items-center flex-column d-md-block">
            <ImageTemp imgsrc={firstimg} responsivewidth="60%"></ImageTemp>
          </div>
        </LandingSectionStyled>

        <SponsoredBrandStyled className="row companylogo d-flex justify-content-center align-items-center flex-column d-md-block">
          {/* <AppleTv /> */}
          <ChromeCast responsivewidth="50%" />
          &nbsp;&nbsp;
          <GooglePlay />
          &nbsp;&nbsp;
          <AppStore />
        </SponsoredBrandStyled>

        <WorkOutHomeStyled className="row" marginb="20%">
          <div className="col-md position-relative d-flex justify-content-center align-items-center flex-column d-md-block">
            <Label
              spantext
              padding="18px 20px"
              bradius="20px"
              boxshadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              bcolor="#fff"
              className="position-absolute"
              top="25%"
              left="5%"
              color="#0c2841"
            >
              <SportsMartialArtsIcon
                style={{
                  color: "#FF7043",
                }}
              />
              Professional Trainer
            </Label>
            <CardImageOverlay
              imgsrc="https://thumbs.dreamstime.com/b/fitness-woman-25371935.jpg"
              bradius="20px"
              width="60%"
              // height="100%"
              float="right"
            />
            <CardImageOverlay
              imgsrc="https://img.freepik.com/free-photo/people-health-sports-activity-fitness-pilates-acrobatics-concept-young-athletic-couple-male-female-practicing-partner-yoga-together-gym-doing-double-plank-one-mat-man-top_343059-3128.jpg?w=360"
              bradius="20px"
              width="60%"
              // height="100%"
              position="absolute"
              top="70%"
              left="10%"
            />
            <Label
              spantext
              padding="18px 20px"
              bradius="20px"
              boxshadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              bcolor="#fff"
              className="position-absolute"
              right="0"
              bottom="-50%"
              color="#0c2841"
            >
              <PlayCircleIcon
                style={{
                  color: "#FF7043",
                }}
              />
              High Quality Video
            </Label>
          </div>
          <div className="col-md mt-5 d-flex justify-content-center align-items-center flex-column d-md-block">
            <Label heading color="#0c2841" responsivemargintop="95px">
              Workout at home with ease
            </Label>
            <Label
              margin="28px 0"
              contentHeading
              content="We believe fitness should be accessible to everyone, everywhere.
            With hundreds of professional workouts, healthy recipes and
            informative articles, you'll have everything you need to reach your
            personal fitness goal."
              color="#6f7c8b"
            ></Label>
            <ButtonCom
              bcolor="#0c2841"
              padding="12px 50px"
              borderradius="12px"
              border="none"
              color="#fff"
              fontsize="18px"
            >
              Get Started
            </ButtonCom>
          </div>
        </WorkOutHomeStyled>

        <WorkOutHomeStyled className="row ">
          <div className="col-md d-flex justify-content-center align-items-center flex-column d-md-block">
            <Label heading color="#0c2841">
              Getting start with Corenergy
            </Label>
            <Label
              margin="28px 0"
              color="#697684"
              contentHeading
              content="Whether you're an absolute beginner, intermediate, or advanced, Corenergy will help you to stay healthy easily whereever and whenever. Get results-focused knowledge on weight loss, strength, nutrition, and more on our blog."
            ></Label>
            <ButtonCom
              bcolor="#0c2841"
              padding="12px 50px"
              borderradius="12px"
              border="none"
              color="#fff"
              fontsize="18px"
            >
              Get Started
            </ButtonCom>
          </div>
          <div className="col-md d-flex justify-content-center align-items-center flex-column d-md-block ">
            <CardImageOverlay imgsrc={secondimg} width="80%" />
          </div>
        </WorkOutHomeStyled>

        <Label
          heading
          fontsize="55px"
          textalign="center"
          padding="95px 0 0 0"
          color="#0b2740"
          responsivefont="40px"
        >
          Our Programs
        </Label>

        <CardWrapperStyled className="d-flex gap-md-5 flex-column flex-md-row justify-content-center align-items-center">
          <CardTemp
            headtext="Cardio Strength"
            paragraphtext="Combining bodyweight cardio with strength exercises."
            linktext="Learn More"
            {...stylecommom}
            icontext="settings_accessibility"
            paddinglearmore="0"
          />
          <CardTemp
            headtext="Basic Yoga"
            paragraphtext="Basic yoga movements for beginners"
            linktext="Learn More"
            {...stylecommom}
            icontext="directions_run"
            paddinglearmore="0"
          />
          <CardTemp
            headtext="Muscle Building"
            paragraphtext="Improve muscle mass with the right exercises"
            linktext="Learn More"
            {...stylecommom}
            icontext="accessibility_new"
            paddinglearmore="0"
          />
          <CardTemp
            headtext="Beginer Pilates"
            paragraphtext="Basic pilates movements for beginners"
            linktext="Learn More"
            {...stylecommom}
            icontext="sports_handball"
            paddinglearmore="0"
          />
        </CardWrapperStyled>
        <FeedBackStyled className="row pt-5 feedback d-flex align-items-center">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Label
              heading
              fontsize="50px"
              color="#0c2841"
              responsivefont="40px"
            >
              What our Happy client says
            </Label>
          </div>
          <div className="col-md-4 ">
            <CardImageOverlay
              imgsrc={thirdimg}
              width="100%"
              responsivewidth="70%"
              className="d-flex justify-content-center align-items-center"
            />
          </div>
          <div className="col-md-4 position-relative">
            <SlickSlider />
          </div>
        </FeedBackStyled>

        <SubScribeStyled className="subscribe-panel">
          <Label
            heading
            color="#fff"
            fontsize="50px"
            margintop="0"
            marginbottom="25px"
            responsivefont="30px"
          >
            Subscribe our daily tips
          </Label>
          <Label
            contentHeading
            color="#fff"
            fontsize="14px"
            margin="0 0 40px 0"
          >
            Get helpful tips to help you get in shape and stay in shape for
            life!
          </Label>
          <div className="w-100 d-flex justify-content-center">
            <FormInputs
              placeholder="Type your email address"
              width="40%"
              border="none"
              bcolor="#fff"
              borderradius="15px"
              placeholderfontsize="15px"
              boxshadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              height="auto"
              padding="13px 25px"
              responsivewidth="64%"
              responsivepadding="11px 12px"
            ></FormInputs>
            &nbsp; &nbsp;
            <ButtonCom
              className="btn btn-secondary"
              padding="17px 60px"
              borderradius="15px"
              color="#fff"
              bcolor="#ff7850"
              border="none"
              fontsize="18px"
              boxshadow="0px 20px 44px -19px #ff7850"
              hoverbcolor="#FF7043"
              hovercolor="#fff"
              responsivepadding="6px 15px"
              responsivefont="13px"
            >
              Subscribe
            </ButtonCom>
          </div>
        </SubScribeStyled>
        <Footer />
      </PageWrapperStyled>
    </>
  );
}

export default LandingPage;
