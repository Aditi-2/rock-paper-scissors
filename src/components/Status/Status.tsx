import React from "react";
import { GameStatus, GameType } from "../../common/types/game";

interface StatusProps {
  gameType: GameType,
  gameStatus: GameStatus;
}

export const Status: React.FC<StatusProps> = ({gameType, gameStatus}) => {
  const player1 = gameType === "PLAYER_VS_COMPUTER" ? "You" : "Computer one";
  const player2 =
    gameType === "PLAYER_VS_COMPUTER" ? "Computer" : "Computer two";

  return (
    <>
      <p>
        {gameStatus === "playerOne" && `${player1}  wins!`}
        {gameStatus === "playerTwo" && `${player2}  wins!`}
        {gameStatus === "DRAW" && "Draw!"}
      </p>
    </>
  );
};
