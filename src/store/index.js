import { createStore } from "redux";
import { rootReducer } from "./reducers";

export const store = createStore(rootReducer);

export const mapStateToProps = ({ experience, education, projects }) => ({
  experience,
  education,
  projects
});

export const mapDispatchToProps = dispatch => ({ dispatch });
