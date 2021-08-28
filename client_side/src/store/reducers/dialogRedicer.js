import {
  DIALOG_LOADING,
  DIALOG_LOADING_FAIL,
  DIALOG_LOADING_SUCCESS,
} from "../types/Dialog";

const initialSate = {
  loading: false,
  error: "",
  data: [],
};
const dialogReducer = (state = initialSate, action) => {
  switch (action.type) {
    case DIALOG_LOADING:
    case DIALOG_LOADING_SUCCESS:
    case DIALOG_LOADING_FAIL:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        data: action.data,
      };
    default:
      return state;
  }
};
export default dialogReducer;
