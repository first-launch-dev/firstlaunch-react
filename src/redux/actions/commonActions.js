import { types as t } from "../types";

const formLoaderAction = (data) => (dispatch) => {
  dispatch({
    type: t.SET_FORM_LODER,
    payload: data,
  });
};

const setFormErrorsAction = (data) => (dispatch) => {
  dispatch({
    type: t.SET_FORM_ERRORS,
    payload: data,
  });
};

const resetFormErrorsAction = () => (dispatch) => {
  dispatch({
    type: t.SET_FORM_ERRORS,
    payload: {},
  });
};
const setMessage = (data) => (dispatch) => {
  dispatch({
    type: t.SET_MESSAGE,
    payload: data,
  });
};

const displayErrorsAction =
  (error, actionToDispatch = null) =>
  (dispatch) => {

    if (actionToDispatch) {
      dispatch({
        type: actionToDispatch,
      });
    }
    if (error.response && error.response.data && error.response.data.errors) {
      dispatch(setFormErrorsAction(error.response.data.errors));
    } else {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch(setMessage({ message, type: "error" }));
    }
  };
const displayMessageAction =
  (message, actionToDispatch = null) =>
  (dispatch) => {
    if (actionToDispatch) {
      dispatch({
        type: actionToDispatch,
      });
    }
    dispatch(setMessage({ message, type: "success" }));
  };
export {
  formLoaderAction,
  setFormErrorsAction,
  resetFormErrorsAction,
  displayErrorsAction,
  displayMessageAction,
  setMessage,
};
