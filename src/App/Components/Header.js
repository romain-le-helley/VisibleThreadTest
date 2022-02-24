import React from "react";
import { Button, Container, Dropdown } from "react-bootstrap";
import { useDate } from "../Hooks/Date";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTeam } from "../Hooks/Team";

const Header = () => {
  const date = useDate();
  const { applyScan } = useTeam();

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <div>
        <input
          type="number"
          onChange={(event) => date.onChangeDateNumber(event.target.value)}
          value={date.dateNumber}
        />
      </div>
      <Dropdown
        className="d-inline mx-2"
        onSelect={(event) => date.onToggleDateChoice(event)}
      >
        <Dropdown.Toggle id="dropdown-autoclose-true">
          {date.dateChoice}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey={"Monthly"}>Monthly</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey={"Weekly"}>Weekly</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button onClick={applyScan} variant="primary">
        Apply
      </Button>
    </Container>
  );
};

export default Header;
