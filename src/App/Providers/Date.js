import React from "react";
import { DateContext } from "../Contexts/Date";
import { useDateProvider } from "../Hooks/Date";

const DateProvider = ({ children }) => {
  const date = useDateProvider();

  return <DateContext.Provider value={date}>{children}</DateContext.Provider>;
};

export default DateProvider;
