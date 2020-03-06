import React from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import { navBarLinksNames } from "app-constants";
import {
  PersonalInfo,
  Education,
  Experience,
  HardSkills,
  SoftSkills,
  PersonalSkills,
  Languages
} from "./tabs";

const NavItemLinks = () => (
  <Nav variant="tabs" className="flex-column">
    <Nav.Item></Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={navBarLinksNames.PERSONAL_INFO}>
        Personal Info
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={navBarLinksNames.EDUCATION}>Education</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={navBarLinksNames.EXPERIENCE}>Experience</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={navBarLinksNames.HARD_SKILLS}>Hard skills</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={navBarLinksNames.SOFT_SKILLS}>Soft skills</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={navBarLinksNames.PERSONAL_SKILLS}>
        Personal skills
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={navBarLinksNames.LANGUAGES}>Languages</Nav.Link>
    </Nav.Item>
  </Nav>
);

const TabsInfo = () => (
  <Tab.Content>
    <Tab.Pane eventKey={navBarLinksNames.PERSONAL_INFO}>
      <PersonalInfo />
    </Tab.Pane>
    <Tab.Pane eventKey={navBarLinksNames.EDUCATION}>
      <Education />
    </Tab.Pane>
    <Tab.Pane eventKey={navBarLinksNames.EXPERIENCE}>
      <Experience />
    </Tab.Pane>
    <Tab.Pane eventKey={navBarLinksNames.HARD_SKILLS}>
      <HardSkills />
    </Tab.Pane>
    <Tab.Pane eventKey={navBarLinksNames.SOFT_SKILLS}>
      <SoftSkills />
    </Tab.Pane>
    <Tab.Pane eventKey={navBarLinksNames.PERSONAL_SKILLS}>
      <PersonalSkills />
    </Tab.Pane>
    <Tab.Pane eventKey={navBarLinksNames.LANGUAGES}>
      <Languages />
    </Tab.Pane>
  </Tab.Content>
);

export const SideBarMenu = () => (
  <Tab.Container defaultActiveKey={navBarLinksNames.PERSONAL_INFO}>
    <Row>
      <Col sm={2}>
        <NavItemLinks />
      </Col>
      <Col sm={10}>
        <TabsInfo />
      </Col>
    </Row>
  </Tab.Container>
);
