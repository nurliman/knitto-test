import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/modules/rootReducer";
import { loadKaryawan } from "../../store/modules/karyawan/actions";
import KaryawanTable from "./KaryawanTable";

const Karyawan: React.FC = () => {
  const dispatch = useDispatch();
  const karyawanList = useSelector((state: RootState) => state.karyawan.data);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    dispatch(loadKaryawan(() => setLoading(false)))
  }, [karyawanList, dispatch])

  return (
    <Container className="karyawan-container">
      <h1 className="karyawan-header">Karyawan</h1>
      <div className="karyawan-body">
        {
          loading === true
            ? <Spinner animation="border" />
            : karyawanList.length !== 0
              ? <KaryawanTable karyawanList={karyawanList} />
              : <h5>Karyawan Tidak Ditemukan</h5>
        }
      </div>
    </Container>
  );
};

export default Karyawan;
