import axios from "axios";
import { CREATE_MEMBERSHIP_REQUEST,
    CLEAR_ERROR,
    CREATE_MEMBERSHIP_SUCCESS,
    CREATE_MEMBERSHIP_FAILURE,
    GET_MEMBERSHIP_REQUEST,
    GET_MEMBERSHIP_SUCCESS,
    GET_MEMBERSHIP_FAILURE,
    UPDATE_MEMBERSHIP_REQUEST,
UPDATE_MEMBERSHIP_SUCCESS,
UPDATE_MEMBERSHIP_FAILURE,
DELETE_MEMBERSHIP_REQUEST,
  DELETE_MEMBERSHIP_SUCCESS,
  DELETE_MEMBERSHIP_FAILURE,
  GET_MEMBER_FAILURE,
  GET_MEMBER_REQUEST,
  GET_MEMBER_SUCCESS,
  DELETE_MEMBER_FAILURE,
  DELETE_MEMBER_REQUEST,
  DELETE_MEMBER_SUCCESS,
  GET_MONTHLYINCOME_REQUEST,
GET_MONTHLYINCOME_SUCCESS,
GET_MONTHLYINCOME_FAILURE,
GET_MONTHLYINCOMECHART_REQUEST,
GET_MONTHLYINCOMECHART_SUCCESS,
GET_MONTHLYINCOMECHART_FAILURE,
CREATE_TRAINER_REQUEST,
CREATE_TRAINER_SUCCESS,
CREATE_TRAINER_FAILURE,
GET_TRAINER_FAILURE,
GET_TRAINER_REQUEST,
GET_TRAINER_SUCCESS,
DELETE_TRAINER_FAILURE,
DELETE_TRAINER_REQUEST,
DELETE_TRAINER_SUCCESS,
  } from "../constants/adminConstant"

    export const createMembership = (membershipdata) => async (dispatch) => {
        try {
          dispatch({ type: CREATE_MEMBERSHIP_REQUEST });
      
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
      
          const { data } = await axios.post(
            "/api/admin/membership/create",
            membershipdata,
            config
          );
      
          dispatch({
            type: CREATE_MEMBERSHIP_SUCCESS,
            payload: data.success,
          });
        } catch (error) {
          dispatch({
            type: CREATE_MEMBERSHIP_FAILURE,
            payload: error.response.data.message || error.message,
          });
        }
      };


      export const getMembership = () => async (dispatch) => {
        try {
          dispatch({ type: GET_MEMBERSHIP_REQUEST });
      
          const { data } = await axios.get('/api/user/membership');
      
          dispatch({
            type: GET_MEMBERSHIP_SUCCESS,
            payload: data.membership,
          });
        } catch (error) {
          dispatch({
            type: GET_MEMBERSHIP_FAILURE,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
        }
      };


      export const updateMembership = (id , membershipdata) => async (dispatch) => {
        try {
          dispatch({ type: UPDATE_MEMBERSHIP_REQUEST });
      
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
      
          const { data } = await axios.put(
            `/api/admin/membership/update/${id}`,
            membershipdata,
            config
          );
      
          dispatch({
            type: UPDATE_MEMBERSHIP_SUCCESS,
            payload: data.success,
          });
        } catch (error) {
          dispatch({
            type: UPDATE_MEMBERSHIP_FAILURE,
            payload: error.response.data.message || error.message,
          });
        }
      };


      export const deleteMembership = (id) => async (dispatch) => {
        try {
          dispatch({ type: DELETE_MEMBERSHIP_REQUEST });
      
          const { data } = await axios.delete(`/api/admin/membership/delete/${id}`);
      
          dispatch({
            type: DELETE_MEMBERSHIP_SUCCESS,
            payload: id,
          });
        } catch (error) {
          dispatch({
            type: DELETE_MEMBERSHIP_FAILURE,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
        }
      };


      export const loadActiveMember = () => async (dispatch) => {
        try {
          dispatch({ type: GET_MEMBER_REQUEST });
      
          const { data } = await axios.get('/api/admin/members/all');
      
          dispatch({
            type: GET_MEMBER_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type: GET_MEMBER_FAILURE,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
        }
      };


   export const deleteMembers= (id) => async (dispatch) => {
        try {
          dispatch({ type: DELETE_MEMBER_REQUEST });
      
          const { data } = await axios.delete(`/api/admin/members/delete/${id}`);
      
          dispatch({
            type: DELETE_MEMBER_SUCCESS,
            payload: id,
          });
        } catch (error) {
          dispatch({
            type: DELETE_MEMBER_FAILURE,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
        }
      };


      export const loadFinancialData = () => async (dispatch) => {
        try {
          dispatch({ type: GET_MONTHLYINCOME_REQUEST });
      
          const { data } = await axios.get('api/payment/monthly-income');
      
          dispatch({
            type: GET_MONTHLYINCOME_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type: GET_MONTHLYINCOME_FAILURE,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
        }
      };
      
      export const loadMonthlyincomeData = () => async (dispatch) => {
        try {
          dispatch({ type: GET_MONTHLYINCOMECHART_REQUEST
            
             });
      
          const { data } = await axios.get('api/payment/monthy-income-chart');
      
          dispatch({
            type: GET_MONTHLYINCOMECHART_SUCCESS,
            payload: data.monthlyIncome,
          });
        } catch (error) {
          dispatch({
            type: GET_MONTHLYINCOMECHART_FAILURE,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
        }
      };
      
      
      export const createTrainer = (trainerdata) => async (dispatch) => {
        try {
          dispatch({ type: CREATE_TRAINER_REQUEST });
      
          const config = { headers: { "Content-Type": "multipart/form-data" } };
      
          const { data } = await axios.post(
            "/api/admin/createnew/trainer",
            trainerdata,
            config
          );
      
          dispatch({
            type: CREATE_TRAINER_SUCCESS,
            payload: data.success,
          });
        } catch (error) {
          dispatch({
            type: CREATE_TRAINER_FAILURE,
            payload: error.response.data.message || error.message,
          });
        }
      };

      
      export const loadtrainerData = () => async (dispatch) => {
        try {
          dispatch({ type: GET_TRAINER_REQUEST
            
             });
      
          const { data } = await axios.get('api/admin/alltrainers');
      
          dispatch({
            type: GET_TRAINER_SUCCESS,
            payload: data.trainer,
          });
        } catch (error) {
          dispatch({
            type: GET_TRAINER_FAILURE,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
        }
      };

      export const deleteTrainer = (id) => async (dispatch) => {
        try {
          dispatch({ type: DELETE_TRAINER_REQUEST });
      
          const { data } = await axios.delete(`/api/admin/delete/trainer/${id}`);
      
          dispatch({
            type: DELETE_TRAINER_SUCCESS,
            payload: id,
          });
        } catch (error) {
          dispatch({
            type: DELETE_TRAINER_FAILURE,
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