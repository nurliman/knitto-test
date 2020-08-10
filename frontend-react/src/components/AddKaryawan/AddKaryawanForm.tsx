import React from "react";
import { Form } from "react-bootstrap";
import { IKaryawan } from "../../store/modules/karyawan/types";

const AddKaryawanForm: React.FC<{ form: IKaryawan; setValues: Function }> = ({
  form,
  setValues,
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "tanggal_masuk"){ 
      console.log(e.target.value);}
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Nama</Form.Label>
        <Form.Control
          name="nama"
          type="name"
          placeholder="Tulis Nama"
          onChange={onChange}
          value={form.nama === null ? "" : form.nama}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Jabatan</Form.Label>
        <Form.Control
          name="jabatan"
          type="title"
          placeholder="Tulis Jabatan Karyawan"
          onChange={onChange}
          value={form.jabatan === null ? "" : form.jabatan}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Tanggal Masuk</Form.Label>
        <Form.Control
          name="tanggal_masuk"
          type="date"
          onChange={onChange}
          value={form.tanggal_masuk.toString()}
        />
      </Form.Group>
    </Form>
  );
};

export default AddKaryawanForm;
