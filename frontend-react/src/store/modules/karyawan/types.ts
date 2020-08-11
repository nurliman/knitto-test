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

export type KaryawanActionsTypes =
  | CreateKaryawanRequest
  | SetKaryawanListRequest
  | SetFilterDate;
