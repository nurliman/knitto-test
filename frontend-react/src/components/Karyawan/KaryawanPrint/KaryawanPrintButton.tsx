import React, { useRef, forwardRef } from "react";
import { Button, Table, TableProps } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import { KaryawanListType } from "../../../store/modules/karyawan/types";
import KaryawanItem from "../KaryawanTable/KaryawanItem";

const ComponentToPrint = forwardRef(
  (
    props: TableProps & { karyawanList: KaryawanListType },
    ref: React.Ref<HTMLTableElement>
  ) => {
    return (
      <Table {...props} ref={ref} striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Nama</th>
            <th>Jabatan</th>
            <th>Tanggal Masuk</th>
          </tr>
        </thead>
        <tbody>
          {props.karyawanList.map((karyawan) => (
            <KaryawanItem print key={karyawan.id} karyawan={karyawan} />
          ))}
        </tbody>
      </Table>
    );
  }
);

const KaryawanPrintButton: React.FC<{
  karyawanList: KaryawanListType;
  disabled?: boolean;
}> = ({ disabled, karyawanList }) => {
  const componentRef = useRef<HTMLTableElement>(null);
  const handlePrint = useReactToPrint({
    content: () => {
      return componentRef.current;
    },
    copyStyles: true,
  });

  return (
    <>
      <Button disabled={disabled} className="mr-1" onClick={handlePrint}>
        Print
      </Button>
      <div className="d-none">
        <ComponentToPrint ref={componentRef} karyawanList={karyawanList} />
      </div>
    </>
  );
};

export default KaryawanPrintButton;
