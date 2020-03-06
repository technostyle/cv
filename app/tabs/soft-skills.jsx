import React from "react";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";
import ListGroup from "react-bootstrap/ListGroup";

const estimations = {
  AWFULL: "Awfull",
  BAD: "Bad",
  SUTTISFACTORY: "Sattisfactory",
  OK: "Ok",
  ALRIGHT: "Allright",
  GOOD: "Good",
  PERFECT: "Perfect"
};

const estimateTrait = estimation => {
  if (estimation < 11) {
    return estimations.AWFULL;
  }

  if (estimation < 31) {
    return estimations.BAD;
  }

  if (estimation < 41) {
    return estimations.SUTTISFACTORY;
  }

  if (estimation < 51) {
    return estimations.OK;
  }

  if (estimation < 71) {
    return estimations.ALRIGHT;
  }

  if (estimation < 91) {
    return estimations.GOOD;
  }

  return qualifications.PERFECT;
};

const SkillItem = ({ trait, estimation }) => (
  <ListGroup.Item>
    <h5> {trait} </h5>
    <ProgressBar now={estimation} label={`${estimation}%`} />
    <h6> {estimateTrait(estimation)} </h6>
  </ListGroup.Item>
);

export const SoftSkills = () => (
  <Container>
    <ListGroup>
      <SkillItem trait="Abble to listen to" estimation={70} />
      <SkillItem trait="Negotiation" estimation={70} />
      <SkillItem trait="Communication skills" estimation={70} />
      <SkillItem trait="Able to admit mistakes" estimation={50} />
      <SkillItem trait="Open for help" estimation={70} />
    </ListGroup>
  </Container>
);
