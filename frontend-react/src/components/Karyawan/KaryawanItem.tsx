import React from "react";
import { IKaryawan } from "../../store/modules/karyawan/types";

const KaryawanItem: React.FC<{ karyawan: IKaryawan }> = ({ karyawan }) => {
  return (
    <tr>
      <td>{karyawan.id}</td>
      <td>{karyawan.nama}</td>
      <td>{karyawan.jabatan}</td>
      <td>{karyawan.tanggal_masuk}</td>
    </tr>
  );
};

export default KaryawanItem;
