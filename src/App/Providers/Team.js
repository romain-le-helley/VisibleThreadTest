import React from "react";
import { TeamContext } from "../Contexts/Team";
import { useTeamProvider } from "../Hooks/Team";

const TeamProvider = ({ children }) => {
  const date = useTeamProvider();

  return <TeamContext.Provider value={date}>{children}</TeamContext.Provider>;
};

export default TeamProvider;
