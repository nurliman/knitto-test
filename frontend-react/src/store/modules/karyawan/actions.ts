import { KaryawanActionsTypes, KaryawanListType, IKaryawan, CREATE_KARYAWAN, SET_KARYAWAN_LIST } from "./types";
import axios from 'axios';
import { Dispatch, AnyAction } from "redux";

import { RootState } from "../rootReducer";

export function createKaryawan(karyawan: IKaryawan): KaryawanActionsTypes {
  return {
    type: CREATE_KARYAWAN,
    payload: { karyawan }
  };
}

export function setKaryawanList(karyawanList: KaryawanListType): KaryawanActionsTypes {
  return {
    type: SET_KARYAWAN_LIST,
    payload: { karyawanList }
  }
};

export const loadKaryawan = (callback:Function) => {
  return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    axios.get("http://backend-express:3000/api/karyawan", { timeout: 5000 })
      .then(response => {
        dispatch(
          setKaryawanList([...getState().karyawan.data, ...response.data])
        );
      })
      .catch(err => console.error(err))
      .finally(()=>callback())
  };
};