import {
  DIALOG_LOADING,
  DIALOG_LOADING_FAIL,
  DIALOG_LOADING_SUCCESS,
} from "../types/Dialog";
import axios from "axios";

const getDialog = () => {
  return async (dispatch) => {
    dispatch({
      type: DIALOG_LOADING,
      loading: true,
      error: "",
      data: [],
    });
    try {
      const res = await axios.get("https://dialog-assignment.herokuapp.com");
      const { data } = res;
      dispatch({
        type: DIALOG_LOADING_SUCCESS,
        loading: false,
        error: "",
        data: data,
      });
    } catch (err) {
      dispatch({
        type: DIALOG_LOADING_FAIL,
        loading: false,
        error: "",
        data: [],
      });
    }
  };
};

export default getDialog;
