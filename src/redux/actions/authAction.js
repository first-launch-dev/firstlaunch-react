import { types as t } from "../types";
import AuthService from "services/auth.service";
import {
  formLoaderAction,
  displayErrorsAction,
  displayMessageAction,
} from "./commonActions";

const registerAction = (data) => (dispatch) => {
  dispatch(formLoaderAction(1));
  return AuthService.register(data).then(
    (response) => {
      console.log(response);
      dispatch({
        type: t.REGISTER_SUCCESS,
        payload: {
          access_token: response.data.data.access_token,
          ...response.data.data.user,
        },
      });
      dispatch(formLoaderAction(0));
      dispatch(displayMessageAction('Registered Successfuly'));
      return Promise.resolve();
    },
    (error) => {
      dispatch(displayErrorsAction(error, t.REGISTER_FAIL));
      dispatch(formLoaderAction(0));
      return Promise.reject();
    }
  );
};


const loginAction = (data) => (dispatch) => {
  dispatch(formLoaderAction(1));

  return AuthService.login(data).then(
    (response) => {
      dispatch({
        type: t.LOGIN_SUCCESS,
        payload: {
          access_token: response.data.data.access_token,
          ...response.data.data.user,
        },
      });
      dispatch(formLoaderAction(0));
      dispatch(displayMessageAction("Login Successfuly"));
      return Promise.resolve();
    },
    (error) => {
      dispatch(displayErrorsAction(error, t.LOGIN_FAIL));
      dispatch(formLoaderAction(0));
      return Promise.reject();
    }
  );
};


const logoutAction = () => (dispatch, getState) => {
  dispatch(formLoaderAction(1));
  const token = getState().auth.user.access_token;
  return AuthService.logout(token).then(
    (response) => {
      dispatch({
        type: t.LOGOUT,
      });
      dispatch(formLoaderAction(0));
      dispatch(displayMessageAction("Logout Successfuly"));
      return Promise.resolve();
    },
    (error) => {
      dispatch(displayErrorsAction(error));
      dispatch(formLoaderAction(0));
      return Promise.reject();
    }
  );
};

export {
  registerAction,
  loginAction,
  logoutAction
};
