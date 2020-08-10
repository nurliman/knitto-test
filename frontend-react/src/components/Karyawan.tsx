import React, { useState } from "react";
import { Table, Container } from "react-bootstrap";

const Karyawan: React.FC = () => {
  const [listKaryawan, setListKaryawan] = useState([]);
  return (
    <Container className="karyawan-container">
      <h1 className="karyawan-header">Karyawan</h1>
      <div className="karyawan-body">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Karyawan;
