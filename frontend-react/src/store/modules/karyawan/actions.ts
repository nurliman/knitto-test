import {
  FilterDate,
  KaryawanActionsTypes,
  KaryawanListType,
  IKaryawan,
  CREATE_KARYAWAN,
  SET_KARYAWAN_LIST,
  SET_FILTER_DATE,
} from "./types";
import axios from "axios";
import { Dispatch, AnyAction } from "redux";

import { RootState } from "../rootReducer";

import { formatDate } from "../../../helpers";

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

export function setFilterDate(filterDate: FilterDate): KaryawanActionsTypes {
  if (!filterDate.start) filterDate.start = new Date(0);
  if (!filterDate.end) filterDate.end = new Date();
  return {
    type: SET_FILTER_DATE,
    payload: { filterDate },
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
        dispatch(
          setFilterDate({
            start: newKaryawan.tanggal_masuk,
            end: newKaryawan.tanggal_masuk,
          })
        );
        return loadKaryawan();
      })
      .catch((err) => console.error(err))
      .finally(() => (callback ? callback() : null));
  };
};

export const loadKaryawan = (callback?: Function, start?: Date, end?: Date) => {
  return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    let url: string = "http://localhost/api/karyawan";

    url += "?start=" + formatDate(getState().karyawan.filter.start);
    url += "&end=" + formatDate(getState().karyawan.filter.end);
    url += "&offset=" + new Date().getTimezoneOffset();

    axios
      .get(url, { timeout: 5000 })
      .then((response) => {
        response.data.sort((a: IKaryawan, b: IKaryawan) =>
          a.id > b.id ? 1 : b.id > a.id ? -1 : 0
        );
        dispatch(setKaryawanList(response.data));
      })
      .catch((err) => console.error(err))
      .finally(() => (callback ? callback() : null));
  };
};
