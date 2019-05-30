
export const defaultExperienceState = {
    data: null
};

export const UPDATE_EXPERIENCE = "update-experience";

export const updateExperienceAction = (data = []) => ({
  type: UPDATE_EXPERIENCE,
  payload: data
});

export const experienceReducer = (state = defaultExperienceState, action) => {
  switch (action.type) {
    case UPDATE_EXPERIENCE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};