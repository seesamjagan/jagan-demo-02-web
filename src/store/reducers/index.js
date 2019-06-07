import { combineReducers } from "redux";
import { experienceReducer } from "./experience";
import { authReducer } from "./auth";


export const rootReducer = combineReducers({
  experience: experienceReducer,
  auth: authReducer
});
