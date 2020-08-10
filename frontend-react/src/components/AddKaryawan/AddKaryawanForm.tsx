import React from "react";
import { Form, Button } from "react-bootstrap";

const AddKaryawanForm: React.FC = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Nama</Form.Label>
        <Form.Control type="name" placeholder="Tulis Nama" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Jabatan</Form.Label>
        <Form.Control type="title" placeholder="Tulis Jabatan Karyawan" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Tanggal Masuk</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
    </Form>
  );
};

export default AddKaryawanForm;
