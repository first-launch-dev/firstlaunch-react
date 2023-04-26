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

export {
  registerAction,
};
