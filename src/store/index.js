import { createStore } from "redux";
import { rootReducer } from "./reducers";

export const store = createStore(rootReducer);

export const mapStateToProps = ({ experience, education, projects }, defaultProps) => ({
  experience,
  education,
  projects,
  ...defaultProps
});

export const mapDispatchToProps = dispatch => ({ dispatch });
