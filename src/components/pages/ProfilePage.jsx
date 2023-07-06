import React from "react";
import SideBar from "../common/SideBar";
import styled from "@emotion/styled";
import css from "../../css/Profile.css";
import {
  WorkoutTime,
  PersonalTrainer,
  CommunityPanel,
  WorkoutStats,
  CaloriesDetails,
  YourClassList,
  PopularTrainer,
} from "../WorkoutLabel/index";
import AccordionItem from "../common/AccordionItem";
import Label from "../common/Label";
import PopUpForDashboard from "../common/PopUpForDashboard";
import CoverFlowDashboardTemp from "../common/CoverFlowDashboardTemp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import { Navigate } from "react-router-dom";

const DashboardStyled = styled.div`
  background-color: #9ca1ae;
  padding: 25px;

  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 1024px) {
    padding: 80px;
  }
`;

const WrapperStyled = styled.div`
  border-radius: 20px;
  background-color: #fff;
  padding: 0px 10px 10px 10px;
`;

const AccordWorkoutSection = styled.div`
  background-color: #fafafa;
`;

const workoutTime = [
  { key: 1, value: "Alo Moves", time: "08:00" },
  { key: 2, value: "P.Volve", time: "08:40" },
  { key: 3, value: "Obe Fitness", time: "09:50" },
  { key: 4, value: "BBG", time: "10:40" },
  { key: 5, value: "Alo Moves", time: "08:00" },
];

function ProfilePage({ options = [] }) {
  return (
    <>
      <DashboardStyled className="profile-dashboard ">
        <WrapperStyled className="row  position-relative">
          <div className="col-xl-1">
            <SideBar />
          </div>

          <AccordWorkoutSection className="col-md-12 col-lg-4 col-xl-3 child-1 position-relative overflow-hidden">
            <WorkoutTime options={workoutTime} />
            <PersonalTrainer />
            <CommunityPanel />
          </AccordWorkoutSection>

          <div className="col-md-12 col-lg-8 child-2">
            <div className="row-md">
              <div className="row">
                <div className="col-md">
                  <WorkoutStats />
                </div>
                <div className="col-md-4 position-relative">
                  <CoverFlowDashboardTemp />
                  {/* <CaloriesDetails /> */}
                </div>
              </div>
              <div className="row position-relative d-flex justify-content-center align-items-center">
                <YourClassList />
              </div>
              <div className="row d-flex justify-content-center align-items-center">
                <PopularTrainer />
              </div>
            </div>
          </div>
        </WrapperStyled>
      </DashboardStyled>
    </>
  );
}

export default ProfilePage;
