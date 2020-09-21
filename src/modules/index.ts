import { combineReducers } from "redux";
import notes from "./note";

const rootReducer = combineReducers({
  notes,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
