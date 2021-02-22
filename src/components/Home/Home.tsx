import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { GameTypeSelection } from "../GameTypeSelection/GameTypeSelection";
import { RootState } from "../../redux/rootReducer";
import { GameContainer } from "../GameContainer/GameContainer";
import { GameType } from "../../common/types/game";
import { Game } from "../../redux/slice/game";

const Home: React.FC = () => {
  const { gameType } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  const selectPlayerType = (args: GameType) => {
    dispatch(Game.actions.setGameType(args));
  };
  return (
    <HomeStyled>
      <h1 className="title">Rock paper scissors</h1>
      {!gameType ? (
        <GameTypeSelection onGameSelection={selectPlayerType} />
      ) : (
        <GameContainer />
      )}
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  text-align: center;
  background-color: #141942;
  color: #fff;
  margin-top: 2rem;

  & .title {
    padding: 5rem 0 2rem 0;
    margin: 0 auto;
  }
`;

export default Home;
