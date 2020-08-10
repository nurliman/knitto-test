import React, { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addKaryawan } from "../../store/modules/karyawan/actions";

import AddKaryawanForm from "./AddKaryawanForm";

const AddKaryawanModal: React.FC<{ onHide: Function; show: boolean }> = (
  props
) => {
  const [loading, setLoading] = useState(false);
  const [form, setValues] = useState({
    id: 0,
    nama: "",
    jabatan: "",
    tanggal_masuk: new Date(),
  });

  const dispatch = useDispatch();
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!loading) {
      setLoading(true);
      dispatch(addKaryawan(form, () => setLoading(false)));
    }
  };

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
        <AddKaryawanForm form={form} setValues={setValues} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => props.onHide()}>
          Close
        </Button>
        <Button className="mr-1" onClick={handleSubmit}>
          {!loading ? (
            "Submit"
          ) : (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddKaryawanModal;
