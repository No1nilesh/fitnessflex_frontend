import {CREATE_MEMBER_FAIL,
 CREATE_MEMBER_REQUEST,
 CREATE_MEMBER_SUCCESS,
 FETCH_MEMBER_FAILURE,
 FETCH_MEMBER_REQUEST,
 FETCH_MEMBER_SUCCESS,
 RENEW_MEMBER_FAIL,
 RENEW_MEMBER_REQUEST,
 RENEW_MEMBER_SUCCESS,
 CLEAR_ERROR} from "../constants/paymentConstant"

const initialState = {};

export const createMemberReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MEMBER_REQUEST:
      return { loading: true };
    case CREATE_MEMBER_SUCCESS:
      return { loading: false, success: true, member: action.payload };
    case CREATE_MEMBER_FAIL:
      return { loading: false, error: action.payload };
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
    default:
      return state;
  }
};

export const renewMemberReducer = (state = initialState, action) => {
  switch (action.type) {
    case RENEW_MEMBER_REQUEST:
      return { loading: true };
    case RENEW_MEMBER_SUCCESS:
      return { loading: false, success: true, member: action.payload };
    case RENEW_MEMBER_FAIL:
      return { loading: false, error: action.payload };
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
    default:
      return state;
  }
};



export const fetchMemberReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_MEMBER_REQUEST:
  return {
  ...state,
  loading: true,
  error: null,
  };
  case FETCH_MEMBER_SUCCESS:
  return {
  ...state,
  loading: false,
  member: action.payload,
  };
  case FETCH_MEMBER_FAILURE:
  return {
  ...state,
  loading: false,
  error: action.payload,
  };

  case CLEAR_ERROR:
    return {
      ...state,
      error: null,
    };

  default:
  return state;
  }
  };