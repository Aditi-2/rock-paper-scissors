import {combineReducers} from "@reduxjs/toolkit";
import { Game } from "./slice/game";

export const rootReducer = combineReducers({
    game: Game.reducer
})

export type RootState = ReturnType<typeof rootReducer>;