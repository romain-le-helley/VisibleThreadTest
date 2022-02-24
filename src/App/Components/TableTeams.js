import React from "react";
import { Container, Table } from "react-bootstrap";
import { useTeam } from "../Hooks/Team";
import FormatedTable from "./FormatedTable";

const TableTeams = () => {
  const { teams, scan, dateArray } = useTeam();

  console.log(scan);
  return (
    <Container>
      <Table responsive>
        <thead>
          <tr>
            <th>Team name</th>
            {scan.length > 0 && (
              <>
                <th>Average</th>
                <th>Total</th>
                {dateArray.map((el, index) => (
                  <th key={index}>{el}</th>
                ))}
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {teams.length &&
            teams.map((teamName, index) => {
              return <FormatedTable key={index} teamName={teamName} />;
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableTeams;
