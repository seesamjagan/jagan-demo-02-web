import { combineReducers } from "redux";
import { experienceReducer } from "./experience";


export const rootReducer = combineReducers({
  experience: experienceReducer
});
