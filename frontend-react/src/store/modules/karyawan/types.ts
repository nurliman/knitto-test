export interface Karyawan {
    id: number;
    nama: string;
    jabatan: string;
    tanggal_masuk: Date;
  }
  
  export interface KaryawanState {
    data: Karyawan[];
  }
  
  export const CREATE_KARYAWAN = "@karyawan/CREATE_KARYAWAN";
  
  interface CreateKaryawanRequest {
    type: typeof CREATE_KARYAWAN;
    payload: { karyawan: Karyawan };
  }
  
  export type KaryawanActionsTypes = CreateKaryawanRequest;