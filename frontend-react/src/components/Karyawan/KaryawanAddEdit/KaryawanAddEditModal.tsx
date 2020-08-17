import React, { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { IKaryawan } from "../../../store/modules/karyawan/types";
import { RootState } from "../../../store/modules/rootReducer";

import {
  addKaryawan,
  editKaryawan,
} from "../../../store/modules/karyawan/actions";

import { ModeType, EDIT_MODE, ADD_MODE } from "./types";

import KaryawanAddEditForm from "./KaryawanAddEditForm";

const KaryawanAddEditModal: React.FC<{
  mode: ModeType;
  onHide: Function;
  title: string;
  show: boolean;
}> = (props) => {

  const karyawanList = useSelector((s: RootState) => s.karyawan.data);
  function modeReducer(mode: ModeType): IKaryawan {
    const state: IKaryawan = {
      id: 0,
      nama: "",
      jabatan: "",
      tanggal_masuk: new Date(),
    };
    switch (mode.type) {
      case EDIT_MODE:
        const payloadKaryawan = mode.payload.karyawan;
        const karyawan = karyawanList.find((i) => i.id === payloadKaryawan.id);
        return karyawan || state;

      default:
        return state;
    }
  }

  const [loading, setLoading] = useState(false);
  const [form, setValues] = useState(modeReducer(props.mode));

  const dispatch = useDispatch();

  const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!loading) {
      setLoading(true);
      dispatch(
        addKaryawan(form, () => {
          setLoading(false);
          setValues({
            id: 0,
            nama: "",
            jabatan: "",
            tanggal_masuk: new Date(),
          });
          props.onHide();
        })
      );
    }
  };

  const handleApply = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!loading) {
      setLoading(true);
      dispatch(
        editKaryawan(form, () => {
          setLoading(false);
          setValues({
            id: 0,
            nama: "",
            jabatan: "",
            tanggal_masuk: new Date(),
          });
          props.onHide();
        })
      );
    }
  };

  const handleOnClick =
    props.mode.type === EDIT_MODE ? handleApply : handleSubmit;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <KaryawanAddEditForm form={form} setValues={setValues} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => props.onHide()}>
          Close
        </Button>
        <Button onClick={handleOnClick}>
          {loading ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            "Submit"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default KaryawanAddEditModal;
