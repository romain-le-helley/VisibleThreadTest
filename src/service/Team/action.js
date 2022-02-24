import { ADD_NEW_TEAM_REQUEST } from "./constant";

export const addNewTeam = (payload) => {
  return { type: ADD_NEW_TEAM_REQUEST, payload };
};
