import React from "react";
import styled from "@emotion/styled";
import { GameType } from "../../common/types/game";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDesktop } from "@fortawesome/free-solid-svg-icons";

interface GameTypeSelectionProps {
  onGameSelection: (args: GameType) => void | Promise<void>
}

export const GameTypeSelection: React.FC<GameTypeSelectionProps> = ({onGameSelection}) => {
  return (
    <GameTypeSelectionStyled>
      <GameTypeStyled onClick={() => onGameSelection("PLAYER_VS_COMPUTER")}>
        <FontAwesomeIcon icon={faUser} className="player-icon" />
        <span className="verses">v/s</span>
        <FontAwesomeIcon icon={faDesktop} className="player-icon" />
      </GameTypeStyled>
      <GameTypeStyled onClick={() => onGameSelection("COMPUTER_VS_COMPUTER")}>
        <FontAwesomeIcon icon={faDesktop} className="player-icon" />
        <span className="verses">v/s</span>
        <FontAwesomeIcon icon={faDesktop} className="player-icon" />
      </GameTypeStyled>
    </GameTypeSelectionStyled>
  );
};

const GameTypeSelectionStyled = styled.div`
  padding: 2rem 0;
`;

const GameTypeStyled = styled.div`
  border: 1px solid #ece8e8;
  padding: 2rem;
  border-radius: 5px;
  margin: 1rem;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 800px) {
    width: 100%;
    max-width: 60%;
    margin: 3rem auto;
  }
  &:hover {
    background-color: #232a61;
  }
  & .verses {
    line-height: 7;
    padding: 0 4rem;
  }
  & .player-icon {
    font-size: 70px;
    margin: 0 5px;

    @media only screen and (min-width: 800px) {
      font-size: 125px;
    }
  }
`;
