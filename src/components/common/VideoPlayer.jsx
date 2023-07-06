import ReactPlayer from "react-player";
import React, { useRef } from "react";
import styled from "@emotion/styled";
const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";

const VideoPlayerStyled = styled.div`
  border: 0;
  border-radius: 20px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  background-color: black;
`;

const StylePlayerReact = styled(ReactPlayer)({
  border: "0",
  borderRadius: "20px",
  position: "relative",
  width: "50%",
});

function VideoPlayer() {
  const playerRef = useRef(null);
  return (
    <VideoPlayerStyled>
      <StylePlayerReact
        ref={playerRef}
        url={VIDEO_PATH}
        controls={true}
      ></StylePlayerReact>
      {/* <ReactPlayer /> */}
    </VideoPlayerStyled>
  );
}
export default VideoPlayer;
