import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const AlgoritmikaExperience = () => (
  <Accordion>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Project
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <div>Singlepage application for chilren programiming education</div>
          <p>HTML5 3D javascript game based on PlayCanvas technology</p>
          <p>Scratch projects</p>
          <p>Personal managing projects studio </p>
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
          <p> Fixing bugs in code written by higher-rated devs</p>
          <p> Developing sophisitcated animation </p>
          <p>
            {" "}
            Implementing basic ui components such as notifications, tooltips,
            popups...{" "}
          </p>
          <p> Making design layout </p>
          <p> Applied third party library componens in current project </p>
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
          Javascript es6, React, Redux, Redux-observable, styled-components,
          git, Docker
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);
