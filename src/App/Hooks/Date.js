import moment from "moment";
import { useCallback, useContext, useState } from "react";
import { DateContext } from "../Contexts/Date";

export const useDateProvider = () => {
  const [dateNumber, setDateNumber] = useState(1);
  const [dateChoice, setDateChoice] = useState("Monthly");

  const onChangeDateNumber = useCallback(
    (value) => {
      if (value >= 1) setDateNumber(value);
    },
    [setDateNumber]
  );

  const onToggleDateChoice = useCallback(
    (value) => {
      setDateChoice(value);
    },
    [setDateChoice]
  );

  return {
    dateNumber,
    dateChoice,
    onToggleDateChoice,
    onChangeDateNumber,
  };
};

export const useDate = () => useContext(DateContext);
