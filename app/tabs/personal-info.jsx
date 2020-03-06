import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

function calculateAge(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const age = calculateAge(Date.parse('Dec 5, 1994'));

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
          <td>{age}</td>
        </tr>
        {/* <tr>
          <td>E-mail</td>
          <td>dan at yandex.com</td>
        </tr> */}
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
