import React, { useState, useEffect, useRef } from "react";
import { Spinner, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/modules/rootReducer";
import { loadKaryawan } from "../../store/modules/karyawan/actions";

import KaryawanTable from "./KaryawanTable";
import KaryawanAddButton from "./KaryawanAdd";
import KaryawanFilterByDate from "./KaryawanFilter";
import KaryawanPrintButton from "./KaryawanPrint";

const Karyawan: React.FC = () => {
  const dispatch = useDispatch();
  const karyawanList = useSelector((state: RootState) => state.karyawan.data);
  const [loading, setLoading] = useState(false);
  const karyawanRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    setLoading(true);
    dispatch(loadKaryawan(() => setLoading(false)));
  }, [dispatch]);

  return (
    <div className="karyawan">
      <Row className="karyawan__item">
        <Col>
          <h1 className="karyawan__header">Karyawan</h1>
        </Col>
      </Row>
      <Row className="karyawan__item">
        <Col>
          <KaryawanFilterByDate setLoading={setLoading} />
        </Col>
      </Row>
      <Row className="karyawan__item">
        <Col>
          <div className="karyawan__body">
            {loading === true ? (
              <Spinner animation="border" />
            ) : karyawanList.length !== 0 ? (
              <KaryawanTable ref={karyawanRef} karyawanList={karyawanList} />
            ) : (
              <h5>Karyawan Tidak Ditemukan</h5>
            )}
          </div>
        </Col>
      </Row>
      <Row className="karyawan__item">
        <Col>
          <KaryawanPrintButton
            disabled={karyawanList.length < 1}
            karyawanRef={karyawanRef}
          />
          <KaryawanAddButton />
        </Col>
      </Row>
    </div>
  );
};

export default Karyawan;
