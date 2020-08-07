import { combineReducers } from "redux";
import karyawanReducer from "./karyawan/reducer";

const rootReducer = combineReducers({
  karyawan: karyawanReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;