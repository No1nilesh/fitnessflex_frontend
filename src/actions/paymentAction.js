import {CREATE_MEMBER_FAIL,
  CREATE_MEMBER_REQUEST,
  CREATE_MEMBER_SUCCESS,
  FETCH_MEMBER_FAILURE,
  FETCH_MEMBER_SUCCESS,
  FETCH_MEMBER_REQUEST,
  RENEW_MEMBER_FAIL,
  RENEW_MEMBER_REQUEST,
  RENEW_MEMBER_SUCCESS
} from "../constants/paymentConstant"


import axios from 'axios';

export const createMember = (id) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_MEMBER_REQUEST });

    const { data } = await axios.post(`/api/payment/process/${id}`);

    dispatch({
      type: CREATE_MEMBER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_MEMBER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const renewMember = (id) => async (dispatch) => {
  try {
    dispatch({ type: RENEW_MEMBER_REQUEST });

    const { data } = await axios.post(`/api/payment/renew/${id}`);

    dispatch({
      type: RENEW_MEMBER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RENEW_MEMBER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const loadmember = () => async (dispatch) => {
  try {
  dispatch({ type: FETCH_MEMBER_REQUEST });
  const { data } = await axios.get('/api/member/me');

dispatch({
  type: FETCH_MEMBER_SUCCESS,
  payload: data.member,
});
} catch (error) {
  dispatch({
  type: FETCH_MEMBER_FAILURE,
  payload: error.message,
  });
  }
  };

