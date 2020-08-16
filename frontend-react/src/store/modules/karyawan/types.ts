export interface IKaryawan {
  id: number;
  nama: string;
  jabatan: string;
  tanggal_masuk: Date;
}

export type KaryawanListType = IKaryawan[];

export type FilterDate = {
  start: Date;
  end: Date;
};

export interface IKaryawanState {
  data: KaryawanListType;
  filter: FilterDate;
}

export const CREATE_KARYAWAN = "@karyawan/CREATE_KARYAWAN";
export const SET_KARYAWAN_LIST = "@karyawan/SET_KARYAWAN_LIST ";
export const SET_FILTER_DATE = "@karyawan/SET_FILTER_DATE";
export const UPDATE_KARYAWAN = "@karyawan/UPDATE_KARYAWAN";
export const DELETE_KARYAWAN = "@karyawan/DELETE_KARYAWAN";

interface SetFilterDate {
  type: typeof SET_FILTER_DATE;
  payload: { filterDate: FilterDate };
}

interface CreateKaryawanRequest {
  type: typeof CREATE_KARYAWAN;
  payload: { karyawan: IKaryawan };
}

interface SetKaryawanListRequest {
  type: typeof SET_KARYAWAN_LIST;
  payload: { karyawanList: KaryawanListType };
}

interface UpdateKaryawanRequest {
  type: typeof UPDATE_KARYAWAN;
  payload: { karyawan: IKaryawan };
}

interface DeleteKaryawanRequest {
  type: typeof DELETE_KARYAWAN;
  payload: { karyawan: IKaryawan };
}

export type KaryawanActionsTypes =
  | CreateKaryawanRequest
  | SetKaryawanListRequest
  | SetFilterDate
  | UpdateKaryawanRequest
  | DeleteKaryawanRequest;
