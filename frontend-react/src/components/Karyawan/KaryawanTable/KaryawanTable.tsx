import React, { forwardRef, useLayoutEffect } from "react";
import { Table } from "react-bootstrap";

import { KaryawanListType } from "../../../store/modules/karyawan/types";
import KaryawanItem from "./KaryawanItem";

interface KaryawanTableProps {
  karyawanList: KaryawanListType;
}

const KaryawanTable = forwardRef(
  (props: KaryawanTableProps, ref: React.Ref<HTMLTableElement>) => {
    const { karyawanList } = props;

    useLayoutEffect(() => {
      console.log(ref);
    });

    return (
      <Table ref={ref} striped bordered hover>
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
            <KaryawanItem key={karyawan.id} karyawan={karyawan} />
          ))}
        </tbody>
      </Table>
    );
  }
);

export default KaryawanTable;
