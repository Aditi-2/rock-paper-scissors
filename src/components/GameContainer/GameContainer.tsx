import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Scores } from "../Scores/Scores";
import { OptionsContainer } from "../OptionsContainer/OptionsContainer";
import { useComputerChoice } from "../../hooks";
import { PlayerSelection } from "../PlayerSelection/PlayerSelection";
import { PlayerChoice } from "../../common/types/game";
import { Game } from "../../redux/slice/game";
import { getComputersChoice, compareHands } from "../../utils/calc";
import { HANDS } from "../../utils/common";

export const GameContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { gameType, scores, choices } = useSelector(
    (state: RootState) => state.game
  );
  const getComputerChoice = useComputerChoice();

  const selectedChoice = (args: PlayerChoice) => {
    if (choices.playerOne === null) {
      if (args !== null) {
        dispatch(
          Game.actions.setPlayerChoice({
            player: "playerOne",
            choice: args,
          })
        );
        const computersChoice = getComputersChoice(HANDS.length);
        dispatch(
          Game.actions.setPlayerChoice({
            player: "playerTwo",
            choice: computersChoice as PlayerChoice,
          })
        );
        const result = compareHands(args, computersChoice);
        dispatch(Game.actions.setGameStatus(result));
      }
    }
  };

  useEffect(() => {
    if (gameType === "COMPUTER_VS_COMPUTER") {
      getComputerChoice();
    }
  }, []);

  return (
    <>
      <Scores scores={scores} gameType={gameType} />
      <PlayerSelection />
      {gameType === "PLAYER_VS_COMPUTER" && (
        <OptionsContainer
          choices={choices}
          handleChoiceSelection={selectedChoice}
        />
      )}
    </>
  );
};
