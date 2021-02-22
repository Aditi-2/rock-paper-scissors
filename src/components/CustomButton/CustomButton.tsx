import styled from "@emotion/styled";
import React from "react";

interface CustomButtonProps {
  label: string;
  onClick?: () => void | Promise<void>;
}
export const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  label,
}) => {
  return (
    <CustomButtonStyled className="custom-btn ripple" onClick={onClick}>
      {label}
    </CustomButtonStyled>
  );
};

const CustomButtonStyled = styled.button`
  width: 100%;
  padding: 4px;
  margin: 5px 0;
  font-size: 0.5rem;
  max-width: 9rem;
  cursor: pointer;
  box-shadow: 0 0 4px #999;
  outline: none;
  border: none;
  background-position: center;
  transition: background 0.8s;

  @media only screen and (min-width: 800px) {
    padding: 1rem;
    font-size: 1.2rem;
    max-width: 9rem;
  }
  &.ripple:hover {
    background: #dadada radial-gradient(circle, transparent 1%, #dadada 1%)
      center/15000%;
  }
  &.ripple:active {
    background-color: #222222;
    background-size: 100%;
    transition: background 0s;
  }
`;
