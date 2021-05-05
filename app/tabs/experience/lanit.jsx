import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const LanitExperience = () => (
  <Accordion>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Project
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
            VTB bank projects. Worked with internal ui-kit visual components library.
            Implemented features for bank web client application VTB-online.
            Was a core developer of a team concerned of separating legacy interanl bank application into microfrontends. 
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
          <p>Building micro-frontend app design from scratch to production</p>
          <p>Creating front-server, solving integration environments problems, making things work</p>
          <p>Creating intergation test environment</p>
          <p>Implementing features from scratch in ongoing project</p>
          <p>Decomposing tasks, mentoring other frontend developers</p>
          <p>Demonstrating team achievments and new functionality</p>
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
          Webpack 5, NodeJs, React, MobX, Redux, styled-components, Redux-thunk, rest-api, Jira
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);
