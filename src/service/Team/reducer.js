import { ADD_NEW_TEAM_ERROR, ADD_NEW_TEAM_SUCCESS } from "./constant";

const initialState = {
  teamName: "",
  error: "",
};

const reducer = function actionReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_TEAM_SUCCESS: {
      return {
        ...state,
        teamName: action.payload,
      };
    }

    case ADD_NEW_TEAM_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
