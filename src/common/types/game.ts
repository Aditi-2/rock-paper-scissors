export type GameType = "PLAYER_VS_COMPUTER" | "COMPUTER_VS_COMPUTER" | null;

export type PlayerChoice = 0 | 1 | 2 | null;

export interface GameChoice {
  playerOne: PlayerChoice;
  playerTwo: PlayerChoice;
}

export type PlayerType = keyof GameChoice;

export type GameStatus = PlayerType | "DRAW" | null;

export type GameScrore = {
  [key in PlayerType]: number;
};

export type ButtonType = "RESTART" | "END";