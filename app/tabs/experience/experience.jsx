import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

import { MiptExperience } from "./mipt";
import { AlgoritmikaExperience } from "./algoritmika";
import { JetExperience } from "./jet";
import { LanitExperience } from "./lanit";


export const Experience = () => (
  <Container>
    <ListGroup>
      <ListGroup.Item>
        <h3> Lanit, Middle/Senior, September 2020 - now </h3>
        <LanitExperience />
      </ListGroup.Item>
      <ListGroup.Item>
        <h3> Jet soft, Middle, July 2019 - September 2020 </h3>
        <JetExperience />
      </ListGroup.Item>
      <ListGroup.Item>
        <h3> Algoritmika, Junior, Nov 2018 - June 2019 </h3>
        <AlgoritmikaExperience />
      </ListGroup.Item>
      <ListGroup.Item>
        <h3> MIPT, Intern, Sep 2018 - Nov 2018 </h3>
        <MiptExperience />
      </ListGroup.Item>
    </ListGroup>
  </Container>
);
