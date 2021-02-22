import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { RootState } from "../../redux/rootReducer";
import { GameScrore, GameType } from "../../common/types/game";

interface ScoresProps {
  scores: GameScrore;
  gameType: GameType;
}

export const Scores: React.FC<ScoresProps> = ({scores, gameType}) => {
  return (
      <ScoresStyled>
        <div className="playerOne">
          {gameType === "PLAYER_VS_COMPUTER" ? (
            <p>You</p>
          ) : (
            <p>Computer One</p>
          )}
          <PlayerScoreStyled>{scores.playerOne}</PlayerScoreStyled>
        </div>
        <div className="playerTwo">
          {gameType === "PLAYER_VS_COMPUTER" ? (
            <p>Computer</p>
          ) : (
            <p>Computer two</p>
          )}
          <PlayerScoreStyled>{scores.playerTwo}</PlayerScoreStyled>
        </div>
      </ScoresStyled>
  );
};

const ScoresStyled = styled.div`
  background-color: #dedede;
  color: #141942;
  border: 1px solid #000;
  border-radius: 5px;
  width: 38%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  font-size: 18px;
  padding: 1rem;
`;

const PlayerScoreStyled = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
