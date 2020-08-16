import React, { useState } from "react";
import { Button } from "react-bootstrap";

import KaryawanAddModal from "./KaryawanAddModal";

const KaryawanAddButton: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Tambah Karyawan
      </Button>

      <KaryawanAddModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default KaryawanAddButton;
