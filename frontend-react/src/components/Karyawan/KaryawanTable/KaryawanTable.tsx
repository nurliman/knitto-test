import React from "react";
import { Table } from "react-bootstrap";

import { KaryawanListType } from "../../../store/modules/karyawan/types";
import KaryawanItem from "./KaryawanItem";

interface KaryawanTableProps {
  karyawanList: KaryawanListType;
}

const KaryawanTable = (props: KaryawanTableProps) => {
  const { karyawanList } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Nama</th>
          <th>Jabatan</th>
          <th>Tanggal Masuk</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {karyawanList.map((karyawan) => (
          <KaryawanItem key={karyawan.id} karyawan={karyawan} />
        ))}
      </tbody>
    </Table>
  );
};

export default KaryawanTable;
