import { combineReducers } from "redux";
import { starWarsReducer } from './starWarsReducer';

export const rootReducer = combineReducers({
    starWars: starWarsReducer,
})

export type RootState = ReturnType<typeof rootReducer>