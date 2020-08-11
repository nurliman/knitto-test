import {
  KaryawanActionsTypes,
  KaryawanListType,
  IKaryawan,
  CREATE_KARYAWAN,
  SET_KARYAWAN_LIST,
} from "./types";
import axios from "axios";
import { Dispatch, AnyAction } from "redux";

import { RootState } from "../rootReducer";

export function createKaryawan(karyawan: IKaryawan): KaryawanActionsTypes {
  return {
    type: CREATE_KARYAWAN,
    payload: { karyawan },
  };
}

export function setKaryawanList(
  karyawanList: KaryawanListType
): KaryawanActionsTypes {
  return {
    type: SET_KARYAWAN_LIST,
    payload: { karyawanList },
  };
}

export const addKaryawan = (karyawan: IKaryawan, callback?: Function) => {
  return (dispatch: Dispatch<AnyAction>) => {
    axios
      .post(
        "http://localhost/api/karyawan",
        {
          nama: karyawan.nama,
          jabatan: karyawan.jabatan,
          tanggal_masuk: karyawan.tanggal_masuk,
        },
        { timeout: 5000 }
      )
      .then((response) => {
        const newKaryawan: IKaryawan = karyawan;
        newKaryawan.id = response.data.id;
        newKaryawan.tanggal_masuk = response.data.tanggal_masuk;
        dispatch(createKaryawan(newKaryawan));
      })
      .catch((err) => console.error(err))
      .finally(() => callback?callback():null);
  };
};

export const loadKaryawan = (callback: Function) => {
  return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    axios
      .get("http://localhost/api/karyawan", { timeout: 5000 })
      .then((response) => {
        dispatch(
          setKaryawanList([...getState().karyawan.data, ...response.data])
        );
      })
      .catch((err) => console.error(err))
      .finally(() => callback());
  };
};
