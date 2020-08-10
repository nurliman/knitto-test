import React, { useState } from "react";
import { Button } from "react-bootstrap";

import AddKaryawanModal from "./AddKaryawanModal";

const AddKaryawanButton: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Tambah Karyawan
      </Button>

      <AddKaryawanModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default AddKaryawanButton;
