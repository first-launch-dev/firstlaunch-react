import { types as t } from "../types";

const defaultState = {
  form_loder: 0,
  errors: {},
  message: null,
};

const commonReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case t.SET_FORM_LODER:
      return {
        ...state,
        form_loder: payload,
      };
    case t.SET_FORM_ERRORS:
      return {
        ...state,
        errors: payload,
      };
    case t.SET_MESSAGE:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
};

export default commonReducer;
