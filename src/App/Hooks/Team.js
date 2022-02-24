import moment from "moment";
import { useCallback, useContext, useEffect, useState } from "react";
import { TeamContext } from "../Contexts/Team";
import { useDate } from "./Date";

export const useTeamProvider = () => {
  const [teams, setTeams] = useState([]);
  const [scan, setScan] = useState({});
  const [dateArray, setDateArray] = useState([]);
  const { dateChoice, dateNumber } = useDate();

  useEffect(() => {
    fetchAllTeam();
  }, []);

  const fetchAllTeam = useCallback(() => {
    fetch("http://stubber.test.visiblethread.com/teams/allNames")
      .then((response) => response.json())
      .then((teams) => {
        setTeams(teams);
      }).catch = (error) => {
      console.log(error);
    };
  });

  const onSendNewTeam = useCallback((newTeamName) => {
    if (teams.includes(newTeamName)) return false;

    setTeams((prev) => [...prev, newTeamName]);
    fetch("http://stubber.test.visiblethread.com/teams/add", {
      method: "POST",
      body: newTeamName,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
    }).catch = (error) => {
      console.log(error);
    };
  });

  const getAllDate = useCallback(async () => {
    const date = [];
    const dateStart = moment().subtract(
      dateNumber,
      dateChoice === "Monthly" ? "month" : "week"
    );
    const dateEnd = moment();
    while (
      dateEnd.diff(dateStart, dateChoice === "Monthly" ? "months" : "weeks") > 0
    ) {
      dateChoice === "Monthly"
        ? date.push(dateStart.format("MMMM"))
        : date.push(dateStart.format("L"));
      await dateStart.add(1, dateChoice === "Monthly" ? "month" : "week");
    }
    setDateArray(date);
  }, [dateNumber, dateChoice]);

  const applyScan = useCallback(async () => {
    const scanPromise = (fetch(
      "http://stubber.test.visiblethread.com/scans/" +
        dateChoice.toLowerCase() +
        "/" +
        dateNumber
    )
      .then((response) => {
        return response.json();
      })
      .then((scanResponse) => {
        setScan(scanResponse);
      }).catch = (error) => {
      console.log(error);
    });
    const datePromise = getAllDate();
    await Promise.all([scanPromise, datePromise]);
  }, [dateNumber, setScan, getAllDate]);

  return {
    teams,
    scan,
    dateArray,
    onSendNewTeam,
    applyScan,
  };
};

export const useTeam = () => useContext(TeamContext);
