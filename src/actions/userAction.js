import { CLEAR_ERROR, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS,
  LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,
   REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS,
  LOGOUT_USER_SUCCESS,LOGOUT_USER_FAIL } from "../constants/userConstant";

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
  



export const clearErrors = ()=> async(dispatch)=>{
    dispatch({
        type:CLEAR_ERROR
    });
}