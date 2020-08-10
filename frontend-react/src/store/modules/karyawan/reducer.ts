import { IKaryawanState, KaryawanActionsTypes, CREATE_KARYAWAN } from "./types";

const initialState: IKaryawanState = {
  data: []
};

export default function karyawanReducer(
  state = initialState,
  action: KaryawanActionsTypes
): IKaryawanState {
  switch (action.type) {
    case CREATE_KARYAWAN:
      return {
        data: [...state.data, action.payload.karyawan]
      };

    default:
      return state;
  }
}