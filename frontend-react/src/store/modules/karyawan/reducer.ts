import {
  IKaryawanState,
  KaryawanActionsTypes,
  CREATE_KARYAWAN,
  SET_KARYAWAN_LIST,
  SET_FILTER_DATE,
} from "./types";

const initialState: IKaryawanState = {
  data: [],
  filter: {
    start: new Date("2020/8/1"),
    end: new Date(),
  },
};

export default function karyawanReducer(
  state = initialState,
  action: KaryawanActionsTypes
): IKaryawanState {
  switch (action.type) {
    case CREATE_KARYAWAN:
      return {
        ...state,
        data: [...state.data, action.payload.karyawan],
      };

    case SET_KARYAWAN_LIST:
      return {
        ...state,
        data: action.payload.karyawanList,
      };

    case SET_FILTER_DATE:
      return {
        ...state,
        filter: action.payload.filterDate,
      };

    default:
      return state;
  }
}
