import React, { useState } from "react";
import Label from "../common/Label";
import Graph from "../../images/graph.jpg";
import styled from "@emotion/styled";
import CardImageOverlay from "../common/CardImageOverlay";
import Dropdown from "react-bootstrap/Dropdown";
import firstimg from "../../images/firstimg.png";
import graph from "../../images/graph.jpg";
import thirdimg from "../../images/thirdimg.png";
import DropDownBootstrap from "../form/DropDownBootstrap";

const WorkOutStatsStyled = styled.div`
  padding: 20px;
`;

const workStats = [
  { key: "weekly" },
  { key: "month" },
  { key: "quaterly" },
  { key: "year" },
];

function WorkoutStats({ index }) {
  const [value, setValue] = useState("month");

  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  return (
    <WorkOutStatsStyled className="">
      <Label headingsecond color="#221b56" fontsize="20px">
        Workout Stats
      </Label>
      <Label
        contentHeading
        color="#221b56"
        fontsize="16px"
        className="position-relative"
      >
        Your Activity
        <DropDownBootstrap
          className="position-absolute end-0 top-0"
          handleSelect={handleSelect}
          options={workStats}
          heading={value}
        />
      </Label>

      <CardImageOverlay
        imgsrc={Graph}
        width="100%"
        height="auto"
        index="weekly"
        value={value}
      />

      <CardImageOverlay
        // imgsrc="https://blog.strava.com/wp-content/uploads/2017/03/FitFreshillustration.png"
        imgsrc="https://media.istockphoto.com/id/927343640/vector/dashboard-infographic-template-with-modern-design-weekly-and-annual-statistics-graphs.jpg?s=612x612&w=0&k=20&c=aYZwV4fiaDfbXQn9n3ZczBUVvKRdxHKHp59m0ymTR90="
        width="100%"
        height="auto"
        index="month"
        value={value}
      />

      <CardImageOverlay
        imgsrc="https://preview.redd.it/new-to-the-apple-watch-is-this-resting-heart-rate-variable-v0-osdddhaqfmw91.jpg?auto=webp&s=ebc01dda3b7d8f6e8130c79225df4a0d1be54cf2"
        width="100%"
        height="auto"
        index="quaterly"
        value={value}
      />

      <CardImageOverlay
        imgsrc="https://cdn.dribbble.com/users/3411387/screenshots/10749338/media/300acf978f869b00ac56b4486dc98ec3.png?compress=1&resize=400x300&vertical=top"
        width="100%"
        height="auto"
        index="year"
        value={value}
      />
    </WorkOutStatsStyled>
  );
}

export default WorkoutStats;
