import { GameStatus } from "../common/types/game";

export const getComputersChoice = (max: number) =>
  Math.floor(Math.random() * Math.floor(max));

export const compareHands = (handOne: number, handeTwo: number): GameStatus => {
  let winningStatus: GameStatus = null;
  if ((handOne + 1) % 3 === handeTwo) {
    winningStatus = "playerTwo";
  } else if (handOne === handeTwo) {
    winningStatus = "DRAW";
  } else {
    winningStatus = "playerOne";
  }
  return winningStatus;
};
