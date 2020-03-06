import React from "react";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";
import ListGroup from "react-bootstrap/ListGroup";

const qualifications = {
  NEWBIE: "Newbie",
  BEGINNER: "Beginner",
  DUMB: "Dumb",
  EVER_GOOGLING: "Ever googling",
  INTERMIDIATE: "Intermediate",
  UPPER_INTERMIDIATE: "Upper Intermediate",
  ADVANCED: "Advanced",
  EXPERT: "Expert",
  GOD: "God"
};

const defineQualification = graduation => {
  if (graduation < 11) {
    return qualifications.NEWBIE;
  }

  if (graduation < 21) {
    return qualifications.DUMB;
  }

  if (graduation < 31) {
    return qualifications.BEGINNER;
  }

  if (graduation < 51) {
    return qualifications.EVER_GOOGLING;
  }

  if (graduation < 61) {
    return qualifications.INTERMIDIATE;
  }

  if (graduation < 71) {
    return qualifications.UPPER_INTERMIDIATE;
  }

  if (graduation < 81) {
    return qualifications.ADVANCED;
  }

  if (graduation < 100) {
    return qualifications.EXPERT;
  }

  return qualifications.GOD;
};

const SkillItem = ({ technology, graduation }) => (
  <ListGroup.Item>
    <h5> {technology} </h5>
    <ProgressBar now={graduation} label={`${graduation}%`} />
    <h6> Qualification: {defineQualification(graduation)} </h6>
  </ListGroup.Item>
);

export const HardSkills = () => (
  <Container>
    <ListGroup>
      <SkillItem technology="HTML5" graduation={60} />
      <SkillItem technology="CSS" graduation={50} />
      <SkillItem technology="Javascript" graduation={80} />
      <SkillItem technology="React" graduation={80} />
      <SkillItem technology="Redux" graduation={80} />
      <SkillItem technology="Redux-thunk" graduation={100} />
      <SkillItem technology="Redux-observable" graduation={50} />
      <SkillItem technology="react-bootstrap" graduation={50} />
      <SkillItem technology="bootstrap" graduation={20} />
      <SkillItem technology="webpack" graduation={50} />
      <SkillItem technology="git" graduation={70} />
      <SkillItem technology="nodejs" graduation={30} />
      <SkillItem technology="electron" graduation={40} />
      <SkillItem technology="node-webkit" graduation={30} />
      <SkillItem technology="styled-components" graduation={30} />
      <SkillItem technology="kubernetes" graduation={10} />
      <SkillItem technology="Jira" graduation={30} />
      <SkillItem technology="Jenkins" graduation={10} />
      <SkillItem technology="Docker" graduation={10} />
    </ListGroup>
  </Container>
);
