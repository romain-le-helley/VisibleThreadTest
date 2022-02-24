import { ADD_NEW_TEAM_REQUEST, ADD_NEW_TEAM_ERROR } from "./constant";
import { all, takeLatest, put } from "redux-saga/effects";

function* addNewTeamFlow(action) {
  try {
    yield console.log(action);
  } catch (error) {
    yield put({ type: ADD_NEW_TEAM_ERROR, payload: error });
  }
}

function* trackWatcher() {
  yield all([takeLatest(ADD_NEW_TEAM_REQUEST, addNewTeamFlow)]);
}

export default trackWatcher;
