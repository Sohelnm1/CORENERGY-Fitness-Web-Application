import React from "react";
import styled from "@emotion/styled";

const SvgStyled = styled.svg`
  fill: ${(props) => props.fill};
`;

function Linkedln({ fill = "" }) {
  return (
    <>
      <SvgStyled
        width="25"
        height="25"
        viewBox="0 0 16 16"
        class="social-icon-svg"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <svg
          width="25"
          height="25"
          viewBox="0 0 16 16"
          class="social-icon-svg"
          fill="#0c2841"
          xmlns="http://www.w3.org/2000/svg"
        > */}
        <path
          d="M3.59237 4.91504V15.1101H0.199219V4.91504H3.59237Z"
          fill={fill}
        ></path>
        <path
          d="M3.81728 1.76098C3.81728 2.73989 3.08043 3.52318 1.89729 3.52318H1.87561C0.736445 3.52318 0 2.73989 0 1.76098C0 0.761367 0.758875 0 1.91965 0C3.08043 0 3.79526 0.761367 3.81728 1.76098Z"
          fill={fill}
        ></path>
        <path
          d="M15.8276 9.2642L15.8274 15.1097H12.4344V9.65537C12.4344 8.28536 11.9434 7.3505 10.7151 7.3505C9.77765 7.3505 9.21928 7.98073 8.97405 8.58944C8.88433 8.80759 8.86231 9.11155 8.86231 9.41624V15.11H5.46875C5.46875 15.11 5.51347 5.87161 5.46875 4.91496H8.86231V6.359C9.31266 5.66483 10.1192 4.67529 11.9208 4.67529C14.1536 4.67529 15.8276 6.13273 15.8276 9.2642Z"
          fill={fill}
        ></path>
        {/* </svg> */}
      </SvgStyled>
    </>
  );
}

export default Linkedln;
