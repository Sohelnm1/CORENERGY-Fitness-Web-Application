import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "@emotion/styled";

const DropButtonStyled = styled(Dropdown.Toggle)({
  background: "#fff",
  color: "#b6b2c6",
  fontSize: "13px",
  border: "0",

  "&:hover, &:focus, &:active": {
    background: "#221b56",
  },
});

function DropDownBootstrap({
  options = [],
  handleSelect = "",
  heading = "",
  className = "",
}) {
  return (
    <Dropdown onSelect={handleSelect} className={className}>
      <DropButtonStyled variant="success" id="dropdown-basic">
        {/* <Dropdown.Toggle variant="success" id="dropdown-basic"> */}
        {heading}
        {/* </Dropdown.Toggle> */}
      </DropButtonStyled>

      <Dropdown.Menu>
        {options.map((el) => {
          return <Dropdown.Item eventKey={el.key}>{el.key}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownBootstrap;
