import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const JetExperience = () => (
  <Accordion>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Project
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          VTB DBO project concerned of distant banking operations. Support of bank-client contract communication
          in terms of the Russian Federal Law 214.
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          Responsibilities
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
          <p>Acting as a team lead, putting out fire when needed</p>
          <p>Implementing new modules</p>
          <p>Fixing bugs</p>
          <p>Refactoring tons of codebase</p>
          <p>Making Code-review</p>
          <p>Keeping codebase tuned for eternally changing circumstances</p>
          <p>Fixing technical setting</p>
          <p>Comunicating with buisnes analysts</p>
          <p>Comunicating with frontend and backend teams</p>
          <p>Consult and help team members</p>
          <p>Update external streams and platform iterations</p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="2">
          Stack of technologies
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="2">
        <Card.Body>
          React, Redux, Redux-thunk, Redux-form, rest-api, kubernetes, Jira,
          Postgresql
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);
