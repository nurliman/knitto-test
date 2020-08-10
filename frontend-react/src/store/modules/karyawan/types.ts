export interface IKaryawan {
  id: number;
  nama: string;
  jabatan: string;
  tanggal_masuk: Date;
}

export type KaryawanListType = IKaryawan[]

export interface IKaryawanState {
  data: KaryawanListType;
}

export const CREATE_KARYAWAN = "@karyawan/CREATE_KARYAWAN";
export const SET_KARYAWAN_LIST = "@karyawan/SET_KARYAWAN_LIST ";

interface CreateKaryawanRequest {
  type: typeof CREATE_KARYAWAN;
  payload: { karyawan: IKaryawan };
}

interface SetKaryawanListRequest {
  type: typeof SET_KARYAWAN_LIST;
  payload: { karyawanList: KaryawanListType }
}

export type KaryawanActionsTypes = CreateKaryawanRequest | SetKaryawanListRequest;