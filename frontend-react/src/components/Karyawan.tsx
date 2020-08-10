import React, { useState, useEffect } from "react";
import { Table, Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/modules/rootReducer";
import { IKaryawan, KaryawanListType } from "../store/modules/karyawan/types";
import { loadKaryawan } from "../store/modules/karyawan/actions";


const KaryawanItem: React.FC<{ karyawan: IKaryawan }> = ({ karyawan }) => {
  return (
    <tr>
      <td>{karyawan.id}</td>
      <td>{karyawan.nama}</td>
      <td>{karyawan.jabatan}</td>
      <td>{karyawan.tanggal_masuk}</td>
    </tr>
  )
}


const KaryawanTable: React.FC<{ karyawanList: KaryawanListType }> = ({ karyawanList }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Nama</th>
          <th>Jabatan</th>
          <th>Tanggal Masuk</th>
        </tr>
      </thead>
      <tbody>
        {karyawanList.map(karyawan => (
          <KaryawanItem karyawan={karyawan} />
        ))}
      </tbody>
    </Table>
  )
}


const Karyawan: React.FC = () => {
  const dispatch = useDispatch();
  const karyawanList = useSelector((state: RootState) => state.karyawan.data);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    dispatch(loadKaryawan(() => setLoading(false)))
  }, [karyawanList, dispatch])

  return (
    <Container className="karyawan-container">
      <h1 className="karyawan-header">Karyawan</h1>
      <div className="karyawan-body">
        {
          loading === true
            ? <Spinner animation="border" />
            : karyawanList.length !== 0
              ? <KaryawanTable karyawanList={karyawanList} />
              : <h5>Karyawan Tidak Ditemukan</h5>
        }
      </div>
    </Container>
  );
};

export default Karyawan;
