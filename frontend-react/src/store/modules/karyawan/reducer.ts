import {
  IKaryawanState,
  KaryawanActionsTypes,
  CREATE_KARYAWAN,
  SET_KARYAWAN_LIST,
} from "./types";

const initialState: IKaryawanState = {
  data: [],
};

export default function karyawanReducer(
  state = initialState,
  action: KaryawanActionsTypes
): IKaryawanState {
  switch (action.type) {
    case CREATE_KARYAWAN:
      return {
        data: [...state.data, action.payload.karyawan],
      };

    case SET_KARYAWAN_LIST:
      return {
        data: action.payload.karyawanList,
      };
      
    default:
      return state;
  }
}
