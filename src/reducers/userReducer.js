import {CLEAR_ERROR, LOGIN_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST,
     REGISTER_SUCCESS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGOUT_USER_FAIL,
    LOGOUT_USER_SUCCESS, UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_RESET,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    FETCH_MEMBERSHIP_REQUEST,
FETCH_MEMBERSHIP_SUCCESS,
FETCH_MEMBERSHIP_FAILURE,
  } from "../constants/userConstant";


export const userReducer = (state={user: {}}, action)=>{
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:  
        case LOAD_USER_REQUEST:  
            return{
                loading:true,
                isAuthenticated:false,
                error:null
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:   
        case LOAD_USER_SUCCESS: 
        return{
            ...state,
            loading:false,
            isAuthenticated:true,
            user:action.payload,
            error:null    
        };
        case LOGOUT_USER_SUCCESS:
            return{
                loading:false,
                isAuthenticated:false,
                user:null,
                error:null
            }
        case LOGIN_FAIL:
            case REGISTER_FAIL:
            return{
                ...state,
                loading:false,
                isAuthenticated:false,
                user:null,
                error:action.payload
            }
        case LOAD_USER_FAIL:
            return{
                loading:false,
                isAuthenticated:false,
                user:null,
                error:action.payload
            }  
        case LOGOUT_USER_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }      
            case CLEAR_ERROR:
                return {
                  ...state,
                error:null
                }
        
            default:
                return state;
    }
}



export const profileReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_PROFILE_REQUEST:
      case UPDATE_PASSWORD_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_PROFILE_SUCCESS:
      case UPDATE_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
  
  
      case UPDATE_PROFILE_FAIL:
      case UPDATE_PASSWORD_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case UPDATE_PROFILE_RESET:
      case UPDATE_PASSWORD_RESET:
        return {
          ...state,
          isUpdated: false,
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


export const forgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
      
      case FORGOT_PASSWORD_REQUEST:
        case RESET_PASSWORD_REQUEST:
        return {
          ...state,
          loading: true,
          error:null
        };
      case FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          message: action.payload,
        };
      case RESET_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          success: action.payload,
        };
  

      case FORGOT_PASSWORD_FAIL:
        case RESET_PASSWORD_FAIL:
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


  const initialState = {
    membership: [],
    loading: false,
    error: null,
    };
    
    export const membershipReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_MEMBERSHIP_REQUEST:
    return {
    ...state,
    loading: true,
    error: null,
    };
    case FETCH_MEMBERSHIP_SUCCESS:
    return {
    ...state,
    loading: false,
    membership: action.payload,
    };
    case FETCH_MEMBERSHIP_FAILURE:
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