import { combineReducers } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";
import teamReducer from "./service/Team/reducer";
import teamSaga from "./service/Team/saga";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const createRootReducer = () =>
  combineReducers({
    teamReducer,
  });

function* rootSagas() {
  yield all([teamSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export default store;
