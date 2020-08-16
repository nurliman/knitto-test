import React from "react";
import { Button } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";

const KaryawanPrintButton: React.FC<{
  karyawanRef: React.RefObject<HTMLTableElement>;
  disabled?: boolean;
}> = ({ disabled, karyawanRef }) => {
  const handlePrint = useReactToPrint({
    content: () => {
      console.log(karyawanRef)
      return karyawanRef.current;
    },
  });

  return (
    <Button disabled={disabled} className="mr-1" onClick={handlePrint}>
      Print
    </Button>
  );
};

export default KaryawanPrintButton;
