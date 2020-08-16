import React, { useState } from "react";
import { ButtonGroup, Button, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { IKaryawan } from "../../../store/modules/karyawan/types";
import { removeKaryawan } from "../../../store/modules/karyawan/actions";

const KaryawanItem: React.FC<{ karyawan: IKaryawan; print?: boolean }> = ({
  karyawan,
  print,
}) => {
  const [deleteLoading, setDeleteLoading] = useState(false);

  const dispatch = useDispatch();
  const deleteHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (deleteLoading) return;
    setDeleteLoading(true);
    dispatch(removeKaryawan(karyawan, () => setDeleteLoading(false)));
  };
  return (
    <>
      <tr>
        <td>{karyawan.id}</td>
        <td>{karyawan.nama}</td>
        <td>{karyawan.jabatan}</td>
        <td>{new Date(karyawan.tanggal_masuk).toLocaleDateString()}</td>
        {!print && (
          <td
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
            }}
          >
            <ButtonGroup aria-label="Basic example" style={{ margin: 5 }}>
              <Button variant="primary">Edit</Button>
              <Button onClick={deleteHandler} variant="danger">
                {deleteLoading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    color="#fff"
                  />
                ) : (
                  "Delete"
                )}
              </Button>
            </ButtonGroup>
          </td>
        )}
      </tr>
    </>
  );
};

export default KaryawanItem;
