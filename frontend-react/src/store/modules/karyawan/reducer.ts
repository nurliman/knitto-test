import { KaryawanState, KaryawanActionsTypes, CREATE_KARYAWAN } from "./types";

const initialState: KaryawanState = {
  data: []
};

export default function karyawanReducer(
  state = initialState,
  action: KaryawanActionsTypes
): KaryawanState {
  switch (action.type) {
    case CREATE_KARYAWAN:
      return {
        data: [...state.data, action.payload.karyawan]
      };

    default:
      return state;
  }
}