import { useDispatch } from "react-redux";
import { PlayerChoice } from "./common/types/game";
import { Game } from "./redux/slice/game";
import { getComputersChoice, compareHands } from "./utils/calc";
import { HANDS } from "./utils/common";

export const useComputerChoice = () => {
  const dispatch = useDispatch();
  const triggerComputerChoice = () => {
    const computerOneChoice = getComputersChoice(HANDS.length) as PlayerChoice;
    if (computerOneChoice !== null) {
      dispatch(
        Game.actions.setPlayerChoice({
          player: "playerOne",
          choice: computerOneChoice,
        })
      );
      const computerTwoChoice = getComputersChoice(HANDS.length);
      dispatch(
        Game.actions.setPlayerChoice({
          player: "playerTwo",
          choice: computerTwoChoice as PlayerChoice,
        })
      );
      const result = compareHands(computerOneChoice, computerTwoChoice);
      dispatch(Game.actions.setGameStatus(result));
    }
  };
  return triggerComputerChoice;
};
