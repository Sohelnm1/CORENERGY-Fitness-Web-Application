import styled from "@emotion/styled";
import React from "react";

const SvgStyled = styled.svg`
  fill: ${(props) => props.fill};
`;

function Youtube({ fill = "" }) {
  return (
    <>
      <SvgStyled
        width="27"
        height="19"
        class="social-icon-svg"
        viewBox="0 0 27 19"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.0259 3.2062C25.8754 2.66934 25.5823 2.18329 25.1776 1.79973C24.7615 1.40437 24.2515 1.12156 23.6958 0.977999C21.616 0.429808 13.2835 0.429808 13.2835 0.429808C9.80979 0.390286 6.33692 0.564114 2.8845 0.950312C2.32877 1.10448 1.81975 1.39361 1.40272 1.79198C0.992965 2.18623 0.696166 2.67241 0.541122 3.20509C0.168677 5.21152 -0.0122826 7.2488 0.000683504 9.28946C-0.012606 11.3283 0.167909 13.3649 0.541122 15.3738C0.692844 15.9043 0.988535 16.3883 1.3994 16.7792C1.81027 17.1701 2.32191 17.4525 2.8845 17.602C4.99199 18.1491 13.2835 18.1491 13.2835 18.1491C16.7617 18.1887 20.239 18.0149 23.6958 17.6286C24.2515 17.485 24.7615 17.2022 25.1776 16.8069C25.5874 16.4159 25.8786 15.9298 26.0248 15.4004C26.407 13.3947 26.5928 11.3566 26.5796 9.31493C26.6084 7.26459 26.4228 5.21686 26.0259 3.20509V3.2062ZM10.6345 13.0814V5.49863L17.5672 9.29057L10.6345 13.0814Z"
          fill={fill}
        ></path>
      </SvgStyled>
    </>
  );
}

export default Youtube;
