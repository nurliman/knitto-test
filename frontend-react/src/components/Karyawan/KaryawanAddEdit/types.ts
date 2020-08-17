import { IKaryawan } from "../../../store/modules/karyawan/types";
export const EDIT_MODE = "@karyawanAddEdit/EDIT_MODE";
export const ADD_MODE = "@karyawanAddEdit/ADD_MODE";

interface Edit {
  type: typeof EDIT_MODE;
  payload: { karyawan: IKaryawan };
}

interface Add {
  type: typeof ADD_MODE;
  payload: {};
}

export type ModeType = Edit | Add;