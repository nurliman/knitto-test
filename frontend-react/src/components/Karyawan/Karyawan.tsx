import React, { useState, useEffect } from "react";
import { Container, Spinner, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/modules/rootReducer";
import { loadKaryawan } from "../../store/modules/karyawan/actions";

import KaryawanTable from "./KaryawanTable";
import AddKaryawanButton from "../AddKaryawan";

const Karyawan: React.FC = () => {
  const dispatch = useDispatch();
  const karyawanList = useSelector((state: RootState) => state.karyawan.data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(loadKaryawan(() => setLoading(false)));
  }, [dispatch]);

  return (
    <Container className="karyawan">
      <Row className="karyawan__item">
        <Col>
          <h1 className="karyawan__header">Karyawan</h1>
        </Col>
      </Row>
      <Row className="karyawan__item">
        <Col>
          <div className="karyawan__body">
            {loading === true ? (
              <Spinner animation="border" />
            ) : karyawanList.length !== 0 ? (
              <KaryawanTable karyawanList={karyawanList} />
            ) : (
              <h5>Karyawan Tidak Ditemukan</h5>
            )}
          </div>
        </Col>
      </Row>
      <Row className="karyawan__item">
        <Col>
          <Button className="mr-2" variant="primary">Print</Button>
          <AddKaryawanButton />
        </Col>
      </Row>
    </Container>
  );
};

export default Karyawan;
