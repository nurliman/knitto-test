import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InputGroup, FormControl, Button } from "react-bootstrap";

import {
  loadKaryawan,
  setFilterDate,
} from "../../store/modules/karyawan/actions";

import { formatDate } from "../../helpers";

const KaryawanFilterByDate: React.FC<{ setLoading: Function }> = ({
  setLoading,
}) => {
  const [dates, setDates] = useState({
    start: new Date(),
    end: new Date(),
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDates({
      ...dates,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const onApply = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setLoading(true);
    dispatch(setFilterDate({ start: dates.start, end: dates.end }));
    dispatch(loadKaryawan(() => setLoading(false)));
  };

  return (
    <InputGroup size="sm">
      <InputGroup.Prepend>
        <InputGroup.Text>Tanggal Masuk</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        name="start"
        type="date"
        placeholder="dd-mm-yyyy"
        onChange={onChange}
        value={formatDate(dates.start)}
      />
      <InputGroup.Prepend>
        <InputGroup.Text>-</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        name="end"
        type="date"
        placeholder="dd-mm-yyyy"
        onChange={onChange}
        value={formatDate(dates.end)}
      />
      <InputGroup.Append>
        <Button onClick={onApply} variant="outline-secondary">
          Apply
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default KaryawanFilterByDate;
