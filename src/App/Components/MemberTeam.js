import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useTeam } from "../Hooks/Team";

const MemberTeam = () => {
  const { onSendNewTeam } = useTeam();

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          onSendNewTeam(event.target[0].value);
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Team name:</Form.Label>
          <Form.Control placeholder="Team name" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add user
        </Button>
      </Form>
    </Container>
  );
};

export default MemberTeam;
