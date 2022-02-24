import React from "react";
import { useDate } from "../Hooks/Date";
import useFormatedTable from "../Hooks/FormatedScan";

const FormatedTable = ({ teamName = "" }) => {
  const [data, totalScan, average] = useFormatedTable(teamName);

  const { dateChoice } = useDate();

  return (
    <tr>
      <th>{teamName}</th>
      {data.length > 0 && (
        <>
          <th>{parseInt(average)}</th>
          <th>{totalScan}</th>
          {data.map((el, index) => {
            return (
              <th key={index}>
                {el.scansAMonth ? el.scansAMonth : el.scansAWeek}
              </th>
            );
          })}
        </>
      )}
    </tr>
  );
};

export default FormatedTable;
