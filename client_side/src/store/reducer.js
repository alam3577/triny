import { combineReducers } from "redux";
import dialogReducer from "./reducers/dialogRedicer";

const rootReducer = combineReducers({
  dialog: dialogReducer,
});

export default rootReducer;
