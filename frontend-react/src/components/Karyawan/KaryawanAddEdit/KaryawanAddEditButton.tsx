import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { IKaryawan } from "../../../store/modules/karyawan/types";
import KaryawanAddEditModal from "./KaryawanAddEditModal";

import { ModeType } from "./types";

const KaryawanAddEditButton: React.FC<{
  mode: ModeType;
  title: string;
}> = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        {props.children}
      </Button>

      <KaryawanAddEditModal
        title={props.title}
        mode={props.mode}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default KaryawanAddEditButton;
