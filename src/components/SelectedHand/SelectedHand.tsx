import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SelectedHandProps {
  icon?: IconDefinition;
  type: "PLAYER_ONE" | "PLAYER_TWO";
}
export const SelectedHand: React.FC<SelectedHandProps> = ({ icon, type }) => {
  return (
      <SelectHandWrapperStyled
        className={`selected-hand-wrapper ${
          type === "PLAYER_ONE" ? "player-one" : "player-two"
        }`}
      >
        <SelectedHandStyled>
          {icon && <FontAwesomeIcon icon={icon} className="choice-icon" />}
        </SelectedHandStyled>
      </SelectHandWrapperStyled>
  );
};

const SelectHandWrapperStyled = styled.div`
  min-width: 100px;
  min-height: 100px;
  background: linear-gradient(to right, red, purple);
  border-radius: 50%;
  max-width: 100px;
  max-height: 100px;
  display: grid;
  place-items: center;
  margin: 0 auto;

  @media only screen and (min-width: 800px) {
    min-width: 200px;
    min-height: 200px;
    max-width: 200px;
    max-height: 200px;
  }

  &.player-one {
    background: linear-gradient(to right, #8b00ff, #a05dd2, #874fb3, #860186);
  }

  &.player-two {
    background: linear-gradient(to right, #f7da62, #daae57, #b7984a, #9c7e3d);
  }
`;

const SelectedHandStyled = styled.div`
  background-color: #fff;
  width: 85%;
  height: 85%;
  border-radius: 50%;
  box-shadow: 10px 10px 5px -8px rgb(59 59 59 / 75%) inset;

  & .choice-icon {
    font-size: 50px;
    padding-top: 17px;
    color: #000;

    @media only screen and (min-width: 800px) {
      font-size: 125px;
      padding-top: 21px;
    }
  }
`;
