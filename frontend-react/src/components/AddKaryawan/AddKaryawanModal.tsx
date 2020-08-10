import React from "react";
import { Modal, Button } from "react-bootstrap";

import AddKaryawanForm from "./AddKaryawanForm";

const AddKaryawanModal: React.FC<{ onHide: Function; show: boolean }> = (
  props
) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tambah Karyawan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddKaryawanForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => props.onHide()}>
          Close
        </Button>
        <Button className="mr-1">Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddKaryawanModal;
