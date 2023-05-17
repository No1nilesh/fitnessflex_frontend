import axios from "axios";
import {
    FETCH_TRAINER_DETAILS_REQUEST,
FETCH_TRAINER_DETAILS_SUCCESS,
FETCH_TRAINER_DETAILS_FAILURE,
GET_TRAINER_AMEMBER_REQUEST,
GET_TRAINER_AMEMBER_SUCCESS,
GET_TRAINER_AMEMBER_FAILURE,
CREATE_PRIVATE_WORKOUT_REQUEST,
CREATE_PRIVATE_WORKOUT_SUCCESS,
CREATE_PRIVATE_WORKOUT_FAILURE,
GET_PRIVATE_WORKOUT_REQUEST,
GET_PRIVATE_WORKOUT_SUCCESS,
GET_PRIVATE_WORKOUT_FAILURE,
DELETE_PRIVATE_WORKOUT_REQUEST,
DELETE_PRIVATE_WORKOUT_SUCCESS,
DELETE_PRIVATE_WORKOUT_FAILURE,
CLEAR_ERROR,
GET_TRAINER_SCHEDULE_REQUEST,
GET_TRAINER_SCHEDULE_SUCCESS,
GET_TRAINER_SCHEDULE_FAILURE,
CREATE_TRAINER_SCHEDULE_REQUEST,
CREATE_TRAINER_SCHEDULE_SUCCESS,
CREATE_TRAINER_SCHEDULE_FAILURE,
UPDATE_TRAINER_SCHEDULE_REQUEST,
UPDATE_TRAINER_SCHEDULE_SUCCESS,
UPDATE_TRAINER_SCHEDULE_FAILURE,
DELETE_TRAINER_SCHEDULE_REQUEST,
DELETE_TRAINER_SCHEDULE_SUCCESS,
DELETE_TRAINER_SCHEDULE_FAILURE,
GET_PRIVATE_DIET_REQUEST,
GET_PRIVATE_DIET_SUCCESS,
GET_PRIVATE_DIET_FAILURE,
DELETE_PRIVATE_DIET_REQUEST,
DELETE_PRIVATE_DIET_SUCCESS,
DELETE_PRIVATE_DIET_FAILURE,
CREATE_PRIVATE_DIET_REQUEST,
CREATE_PRIVATE_DIET_SUCCESS,
CREATE_PRIVATE_DIET_FAILURE,
GET_COUNT_REQUEST,
GET_COUNT_SUCCESS,
GET_COUNT_FAILURE
} from "../constants/trainerConstant"

export const getTrainer = () => async (dispatch) => {
    try {
      dispatch({ type: FETCH_TRAINER_DETAILS_REQUEST });
  
      const { data } = await axios.get('/api/trainer/details');
  
      dispatch({
        type: FETCH_TRAINER_DETAILS_SUCCESS,
        payload: data.trainer,
      });
    } catch (error) {
      dispatch({
        type: FETCH_TRAINER_DETAILS_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getAssign = () => async (dispatch) => {
    try {
      dispatch({ type: GET_TRAINER_AMEMBER_REQUEST});
  
      const { data } = await axios.get('/api/trainer/assigned/members');
  
      dispatch({
        type: GET_TRAINER_AMEMBER_SUCCESS,
        payload: data.assignedMembers,
      });
    } catch (error) {
      dispatch({
        type: GET_TRAINER_AMEMBER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const createprivateworkout = (id, workoutdata) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_PRIVATE_WORKOUT_REQUEST});
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        `/api/trainer/assigned/members/${id}/workout-plans/new`,
        workoutdata,
        config
      );
  
      dispatch({
        type: CREATE_PRIVATE_WORKOUT_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: CREATE_PRIVATE_WORKOUT_FAILURE,
        payload: error.response.data.message || error.message,
      });
    }
  };


  //get private workout 

  export const getPrivateworkout = (id) => async (dispatch) => {
    try { dispatch({ type: GET_PRIVATE_WORKOUT_REQUEST
        
         });
  
      const { data } = await axios.get(`/api/trainer/assigned/members/${id}/workout-plans`);
  
      dispatch({
        type: GET_PRIVATE_WORKOUT_SUCCESS,
        payload: data.private_workout
        ,
      });
    } catch (error) {
      dispatch({
        type: GET_PRIVATE_WORKOUT_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const deletepvworkout = (mid, wid) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_PRIVATE_WORKOUT_REQUEST });
  
      const { data } = await axios.delete(`/api/trainer/assigned/members/${mid}/workout-plans/${wid}/delete`);
  
      dispatch({
        type: DELETE_PRIVATE_WORKOUT_SUCCESS,
        payload: wid,
      });
    } catch (error) {
      dispatch({
        type: DELETE_PRIVATE_WORKOUT_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const deletepschedule = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_TRAINER_SCHEDULE_REQUEST });
  
      const { data } = await axios.delete(`/api/trainer/calender/delete/${id}`);
  
      dispatch({
        type: DELETE_TRAINER_SCHEDULE_SUCCESS,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: DELETE_TRAINER_SCHEDULE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const gettrainerschedule = () => async (dispatch) => {
    try { dispatch({ type: GET_TRAINER_SCHEDULE_REQUEST
        
         });
  
      const { data } = await axios.get(`/api/trainer/calender`);
  
      dispatch({
        type: GET_TRAINER_SCHEDULE_SUCCESS,
        payload: data.calenderdata
        ,
      });
    } catch (error) {
      dispatch({
        type: GET_TRAINER_SCHEDULE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const createtrainercalender = (schdata) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_TRAINER_SCHEDULE_REQUEST});
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "/api/trainer/calender/new",
        schdata,
        config
      );
  
      dispatch({
        type: CREATE_TRAINER_SCHEDULE_SUCCESS,
        payload: data.success,  
      });
    } catch (error) {
      dispatch({
        type: CREATE_TRAINER_SCHEDULE_FAILURE,
        payload: error.response.data.message || error.message,
      });
    }
  };

  export const updateSchedule = (id , scheduledata) => async (dispatch) => {
    try {
      dispatch({ type:  UPDATE_TRAINER_SCHEDULE_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.put(
        `/api/trainer/calender/update/${id}`,
        scheduledata,
        config
      );
  
      dispatch({
        type: UPDATE_TRAINER_SCHEDULE_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_TRAINER_SCHEDULE_FAILURE,
        payload: error.response.data.message || error.message,
      });
    }
  };



  export const createprivatediet = (id, dietdata) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_PRIVATE_DIET_REQUEST});
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        `/api/trainer/assigned/members/${id}/diet-plans/new`,
        dietdata,
        config
      );
  
      dispatch({
        type: CREATE_PRIVATE_DIET_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: CREATE_PRIVATE_DIET_FAILURE,
        payload: error.response.data.message || error.message,
      });
    }
  };


  //get private workout 

  export const getPrivatediet = (id) => async (dispatch) => {
    try { dispatch({ type: GET_PRIVATE_DIET_REQUEST
        
         });
  
      const { data } = await axios.get(`/api/trainer/assigned/members/${id}/diet-plans`);
  
      dispatch({
        type: GET_PRIVATE_DIET_SUCCESS,
        payload: data.private_diet
        ,
      });
    } catch (error) {
      dispatch({
        type: GET_PRIVATE_DIET_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const deletepvwdiet = (mid, did) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_PRIVATE_WORKOUT_REQUEST });
  
      const { data } = await axios.delete(`/api/trainer/assigned/members/${mid}/diet-plans/${did}/delete`);
  
      dispatch({
        type: DELETE_PRIVATE_DIET_REQUEST,
        payload: did,
      });
    } catch (error) {
      dispatch({
        type: DELETE_PRIVATE_DIET_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  ///load count

  export const getCount = () => async (dispatch) => {
    try { dispatch({ type: GET_COUNT_REQUEST
         });
  
      const { data } = await axios.get(`/api/trainer/info`);
  
      dispatch({
        type: GET_COUNT_SUCCESS,
        payload: data
        ,
      });
    } catch (error) {
      dispatch({
        type: GET_COUNT_FAILURE,
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
