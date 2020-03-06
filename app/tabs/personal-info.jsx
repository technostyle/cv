import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

export const PersonalInfo = () => (
  <Container>
    <Table striped bordered hover>
      <tbody>
        <tr>
          <td>Location</td>
          <td>Moscow, Russia</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>25</td>
        </tr>
        <tr>
          <td>E-mail</td>
          <td>perloff.danila at gmail.com</td>
        </tr>
        <tr>
          <td>Media</td>
          <td>
            <a href="https://career.habr.com/technostyle">career.habr.com</a>
          </td>
        </tr>
        <tr>
          <td>Repos</td>
          <td>
            <a href="https://github.com/technostyle">github</a>
          </td>
        </tr>
      </tbody>
    </Table>
  </Container>
);
