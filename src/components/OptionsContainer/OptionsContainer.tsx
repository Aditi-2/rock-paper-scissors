import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { GameChoice, PlayerChoice } from "../../common/types/game";
import { HANDS } from "../../utils/common";

interface OptionsContainerProps {
  choices: GameChoice;
  handleChoiceSelection: (args: PlayerChoice) => void | Promise<void>
}

export const OptionsContainer: React.FC<OptionsContainerProps> = ({choices, handleChoiceSelection}) => {
  return (
    <ChoiceContainerStyled>
      {HANDS.map((hand, index) => (
        <ChoiceIconContainerStyled
          className="choices player-choice"
          key={hand.name}
        >
          <FontAwesomeIcon
            icon={hand.icon}
            className={`choice-icon ${
              choices.playerOne === null ? "player-choice-icon" : "disabled"
            }`}
            onClick={
              choices.playerOne === null
                ? () => handleChoiceSelection(index as PlayerChoice)
                : undefined
            }
          />
        </ChoiceIconContainerStyled>
      ))}
    </ChoiceContainerStyled>
  );
};

const ChoiceContainerStyled = styled.div`
  display: flex;
  width: 40%;
  margin: 0 auto;
  padding: 2rem 0;
`;

const ChoiceIconContainerStyled = styled.div`
  font-size: 35px;
  margin: 0 auto;
  color: #d6d6d6;
  @media only screen and (min-width: 800px) {
    font-size: 70px;
  }
  &.player-choice {
    width: 100%;
    @media only screen and (min-width: 800px) {
      width: 33%;
    }
    & .disabled {
      color: #ababab;
    }
    & .player-choice-icon {
      &:hover {
        color: #3f51b5;
      }
    }
  }
`;
