import React from "react";
import { IKaryawan } from "../../../store/modules/karyawan/types";

const KaryawanItem: React.FC<{ karyawan: IKaryawan }> = ({ karyawan }) => {
  return (
    <tr>
      <td>{karyawan.id}</td>
      <td>{karyawan.nama}</td>
      <td>{karyawan.jabatan}</td>
      <td>{new Date(karyawan.tanggal_masuk).toLocaleDateString()}</td>
    </tr>
  );
};

export default KaryawanItem;
