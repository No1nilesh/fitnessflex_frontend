import {FETCH_MEMBER_PRIVATE_REQUEST,
    FETCH_MEMBER_PRIVATE_SUCCESS,
    FETCH_MEMBER_PRIVATE_FAILURE,
 CLEAR_ERROR,
 FETCH_MEMBER_PRIVATE_DIET_REQUEST,
 FETCH_MEMBER_PRIVATE_DIET_SUCCESS,
 FETCH_MEMBER_PRIVATE_DIET_FAILURE} from "../constants/memberConstant"


 const initialGetState = {
    loading: false,
    pvworkout: null,
    error: null,
  };
  
  export const getmemberpvworkout = (state = initialGetState, action) => {
    switch (action.type) {
      case FETCH_MEMBER_PRIVATE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_MEMBER_PRIVATE_SUCCESS:
        return {
          ...state,
          loading: false,
          pvworkout: action.payload,
        };
      case FETCH_MEMBER_PRIVATE_FAILURE:
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
  
  export const getmemberpvdiet = (state = {pvt_diet:[]}, action) => {
    switch (action.type) {
      case FETCH_MEMBER_PRIVATE_DIET_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_MEMBER_PRIVATE_DIET_SUCCESS:
        return {
          ...state,
          loading: false,
          pvt_diet: action.payload,
        };
      case FETCH_MEMBER_PRIVATE_DIET_FAILURE:
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
  