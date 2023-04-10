import { CLEAR_ERROR, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS,
  LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,
   REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS,
  LOGOUT_USER_SUCCESS,LOGOUT_USER_FAIL, UPDATE_PROFILE_FAIL,
   UPDATE_PROFILE_REQUEST,  UPDATE_PROFILE_SUCCESS,UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL, 
    FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL , 
    RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS ,FETCH_MEMBERSHIP_REQUEST,
    FETCH_MEMBERSHIP_SUCCESS,
    FETCH_MEMBERSHIP_FAILURE, } from "../constants/userConstant";

import axios from "axios";


export const login = (email, password) => async(dispatch)=>{
   
    try {
        dispatch({type:LOGIN_REQUEST});
        const config = {headers: {"Content-Type": "application/json"}};

        const {data} = await axios.post(
            `/api/auth/login`,
            {email, password},
            config
        );

        dispatch({type:LOGIN_SUCCESS, payload:data.user});
    } catch (error) {
        dispatch({type:LOGIN_FAIL, payload: error.response.data.message});

    }
}


export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_REQUEST });
  //while uplaoding image content-type should be multipart/form-data
      // const config = { headers: { "Content-Type": "application/json" } };
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.post(`/api/auth/createuser`, userData, config);
  
      dispatch({ type: REGISTER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const loadUser = () => async (dispatch) => {
    try {
      dispatch({ type: LOAD_USER_REQUEST });
  
      const { data } = await axios.get(`/api/auth/me`);
  
      dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
  };

  export const logout = () => async (dispatch) => {
    try {
      dispatch({ type: LOAD_USER_REQUEST });
  
   await axios.get(`/api/auth/logout`);
  
      dispatch({ type: LOGOUT_USER_SUCCESS});
    } catch (error) {
      dispatch({ type: LOGOUT_USER_FAIL, payload: error.response.data.message });
    }
  };
  
  export const updateProfile = (userData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PROFILE_REQUEST });
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.put(`/api/auth/me/update`, userData, config);
  
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_PROFILE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const updatePassword = (userData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PASSWORD_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.put(`/api/auth/password/update`, userData, config);
  
      dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  export const forgotPasssword = (email ) => async(dispatch)=>{
   
    try {
        dispatch({type:FORGOT_PASSWORD_REQUEST});
        const config = {headers: {"Content-Type": "application/json"}};

        const {data} = await axios.post(
            `/api/auth/password/forgot`,
            email,
            config
        );

        dispatch({type:FORGOT_PASSWORD_SUCCESS, payload:data.message});
    } catch (error) {
        dispatch({type:FORGOT_PASSWORD_FAIL, payload: error.response.data.message});

    }
}


  export const resetPasssword = (token, passwords ) => async(dispatch)=>{
   
    try {
        dispatch({type:RESET_PASSWORD_REQUEST});
        const config = {headers: {"Content-Type": "application/json"}};

        const {data} = await axios.put(
            `/api/auth/reset/${token}`,
            passwords,
            config
        );

        dispatch({type:RESET_PASSWORD_SUCCESS, payload:data.trainer});
    } catch (error) {
        dispatch({type:RESET_PASSWORD_FAIL, payload: error.response.data.message});

    }
}



export const fetchMembership = () => async (dispatch) => {
  try {
  dispatch({ type: FETCH_MEMBERSHIP_REQUEST });
  const { data } = await axios.get('/api/user/membership');

dispatch({
  type: FETCH_MEMBERSHIP_SUCCESS,
  payload: data.membership,
});
} catch (error) {
  dispatch({
  type: FETCH_MEMBERSHIP_FAILURE,
  payload: error.message,
  });
  }
  };


export const clearErrors = ()=> async(dispatch)=>{
    dispatch({
        type:CLEAR_ERROR
    });
}