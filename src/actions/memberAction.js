import axios from "axios"
import {FETCH_MEMBER_PRIVATE_REQUEST,
    FETCH_MEMBER_PRIVATE_SUCCESS,
    FETCH_MEMBER_PRIVATE_FAILURE,
    CLEAR_ERROR,
    FETCH_MEMBER_PRIVATE_DIET_REQUEST,
    FETCH_MEMBER_PRIVATE_DIET_SUCCESS,
    FETCH_MEMBER_PRIVATE_DIET_FAILURE} from "../constants/memberConstant"

    
    export const getpvworkout = () => async (dispatch) => {
        try {
          dispatch({ type: FETCH_MEMBER_PRIVATE_REQUEST });
      
          const { data } = await axios.get('/api/member/private_workouts');
      
          dispatch({
            type: FETCH_MEMBER_PRIVATE_SUCCESS,
            payload: data.private_workout,
          });
        } catch (error) {
          dispatch({
            type: FETCH_MEMBER_PRIVATE_FAILURE,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
        }
      };

    export const getpvdiet = () => async (dispatch) => {
        try {
          dispatch({ type: FETCH_MEMBER_PRIVATE_DIET_REQUEST });
      
          const { data } = await axios.get('/api/member/private_diets');
      
          dispatch({
            type: FETCH_MEMBER_PRIVATE_DIET_SUCCESS,
            payload: data.private_diet,
          });
        } catch (error) {
          dispatch({
            type: FETCH_MEMBER_PRIVATE_DIET_FAILURE,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
        }
      };




      export const clearErrors = ()=> async(dispatch)=>{
        dispatch({
            type:CLEAR_ERROR
        });
    }