import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const KaryawanFilterByDate: React.FC = () => {
    return (
        <InputGroup size="sm">
            <InputGroup.Prepend>
                <InputGroup.Text>Tanggal Masuk</InputGroup.Text>
                <InputGroup.Text>Dari:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name="tanggalAwal" type="date" placeholder="dd-mm-yyyy" />
            <InputGroup.Prepend>
                <InputGroup.Text>Sampai:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name="tanggalAkhir" type="date" placeholder="dd-mm-yyyy" />
            <InputGroup.Append>
                <Button variant="outline-secondary">Apply</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default KaryawanFilterByDate