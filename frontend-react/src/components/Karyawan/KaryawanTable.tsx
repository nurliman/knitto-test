import React from "react";
import { Table } from "react-bootstrap";

import { KaryawanListType } from "../../store/modules/karyawan/types";
import KaryawanItem from "./KaryawanItem";

const KaryawanTable: React.FC<{ karyawanList: KaryawanListType }> = ({
  karyawanList,
}) => {
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
        {karyawanList.map((karyawan) => (
          <KaryawanItem karyawan={karyawan} />
        ))}
      </tbody>
    </Table>
  );
};

export default KaryawanTable;
