import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  GameChoice,
  GameScrore,
  GameStatus,
  GameType,
  PlayerChoice,
  PlayerType,
} from "../../common/types/game";

interface GameState {
  scores: GameScrore;
  choices: GameChoice;
  gameType: GameType;
  gameStatus: GameStatus;
}

const initialState: GameState = {
  scores: {
    playerOne: 0,
    playerTwo: 0,
  },
  choices: {
    playerOne: null,
    playerTwo: null,
  },
  gameType: null,
  gameStatus: null,
};

export const Game = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPlayerChoice: (
      state: GameState,
      action: PayloadAction<{ player: PlayerType; choice: PlayerChoice }>
    ) => {
      const { player, choice } = action.payload;
      state.choices[player] = choice;
      return state;
    },
    setGameStatus: (state: GameState, action: PayloadAction<GameStatus>) => {
      state.gameStatus = action.payload;
      if (action.payload !== null && action.payload !== "DRAW") {
        state.scores[action.payload] += 1;
      }
      return state;
    },
    resetGameChoice: (state) => {
      state.choices = initialState.choices;
      state.gameStatus = initialState.gameStatus;
      return state;
    },
    setGameType: (state: GameState, action: PayloadAction<GameType>) => {
      state.gameType = action.payload;
      return state;
    },
    finishGame: (state) => {
      state.gameType = initialState.gameType;
      state.scores = initialState.scores;
      state.choices = initialState.choices;
      state.gameStatus = initialState.gameStatus;
      return state;
    },
  },
});
