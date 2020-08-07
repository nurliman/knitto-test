import { KaryawanActionsTypes, Karyawan, CREATE_KARYAWAN } from "./types";

export function createKaryawan(karyawan: Karyawan): KaryawanActionsTypes {
  return {
    type: CREATE_KARYAWAN,
    payload: { karyawan }
  };
}