import styled from "@emotion/styled";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useComputerChoice } from "../../hooks";
import { Game } from "../../redux/slice/game";
import { RootState } from "../../redux/rootReducer";
import { HANDS } from "../../utils/common";
import { SelectedHand } from "../SelectedHand/SelectedHand";
import { Status } from "../Status/Status";
import { ButtonType } from "../../common/types/game";
import { ActionBar } from "../ActionBar/ActionBar";

export const PlayerSelection: React.FC = () => {
  const dispatch = useDispatch();
  const { choices, gameType, gameStatus } = useSelector((state: RootState) => state.game);
  const getComputerChoice = useComputerChoice();
  const handleClick = (buttonType: ButtonType) => {
    if (buttonType === "RESTART") {
      dispatch(Game.actions.resetGameChoice());
      if (gameType === "COMPUTER_VS_COMPUTER") {
        getComputerChoice();
      }
    } else {
      dispatch(Game.actions.finishGame());
    }
  };

  return (
    <PlayerHandSelectionStyled>
      <div className="player-one-selection">
        <SelectedHand
          icon={
            choices.playerOne !== null
              ? HANDS[choices.playerOne].icon
              : undefined
          }
          type="PLAYER_ONE"
        />
      </div>
      <div className="game-result">
        <div className="game-status">
          <div className="status">
            <Status gameType={gameType} gameStatus={gameStatus}/>
          </div>
          <ActionBar onButtonClick={handleClick} />
        </div>
      </div>
      <div className="player-two-selection">
        <SelectedHand
          icon={
            choices.playerTwo !== null
              ? HANDS[choices.playerTwo].icon
              : undefined
          }
          type="PLAYER_TWO"
        />
      </div>
    </PlayerHandSelectionStyled>
  );
};

const PlayerHandSelectionStyled = styled.div`
  display: grid;
  grid-template-columns: auto 30% auto;
  grid-template-areas: "player-one-selection game-result player-two-selection";
  width: 100%;
  color: #dedede;
  margin: 5rem 0 2rem 0;

  & .player-one-selection {
    grid-area: player-one-selection;
  }

  & .player-two-selection {
    grid-area: player-two-selection;
  }

  & .game-result {
    grid-area: game-result;
  }

  & .game-status {
    display: grid;
    grid-template-rows: 35% 65%;
    grid-template-areas:
      "game-status"
      "action-buttons";
    height: 100%;
    width: 100%;
    font-size: 1rem;

    @media only screen and (min-width: 800px) {
      font-size: 3rem;
    }

    & .status {
      grid-area: game-status;
      min-height: 4.5rem;
      @media only screen and (min-width: 800px) {
        min-height: 10rem;
      }
    }
  }
`;
