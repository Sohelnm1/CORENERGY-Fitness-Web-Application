import React from "react";
import styled from "@emotion/styled";

const SelectStyled = styled.select`
  width: ${(props) => props.width};
  border: none;
  background: none;
  font-size: ${(props) => props.fontsize || "16px"};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  outline: none;
  // appearance: unset;

  &:hover {
    // border-bottom: 1px ridge #7a7a7a;
    // border-bottom: 1px solid;
    border-color: rgba(0, 0, 0, 0.12);
    // appearance: revert;
  }
`;

const OptionStyled = styled.option`
  font-size: 13px;
`;

function DropDowncom(props) {
  const {
    width = "",
    color = "",
    name = "",
    value = "",
    padding = "",
    options = [],
    optionsone = [],
    position = "",
    top = "",
    right = "",
    className = "",
    fontsize = "",
    key = "",
    onSelect = "",
    selected = "",
  } = props;
  return (
    <>
      <SelectStyled
        id="lang"
        right={right}
        width={width}
        color={color}
        onSelect={onSelect}
        name={name}
        value={value}
        padding={padding}
        position={position}
        className={className}
        top={top}
        fontsize={fontsize}
        key={key}
      >
        {options.map((el) => (
          <>
            <option key={el.id} selected={el.select}>
              {el.value}
            </option>
          </>
        ))}
      </SelectStyled>
    </>
  );
}

export default DropDowncom;
