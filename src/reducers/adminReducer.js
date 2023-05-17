import axios from "axios";
import {
  CREATE_MEMBERSHIP_REQUEST,
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
CREATE_TRAINER_FAILURE,
CREATE_TRAINER_REQUEST,
CREATE_TRAINER_SUCCESS,
GET_TRAINER_FAILURE,
GET_TRAINER_REQUEST,
GET_TRAINER_SUCCESS,
DELETE_TRAINER_FAILURE,
DELETE_TRAINER_REQUEST,
DELETE_TRAINER_SUCCESS,

  CLEAR_ERROR
} from "../constants/adminConstant";
//by mistake made the trainefr here
import { DELETE_TRAINER_SCHEDULE_FAILURE, DELETE_TRAINER_SCHEDULE_REQUEST, DELETE_TRAINER_SCHEDULE_SUCCESS } from "../constants/trainerConstant";

// createMembershipReducer.js

const initialState = {
  loading: false,
  createdMembership: null,
  error: null,
};

export const createMembershipReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MEMBERSHIP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_MEMBERSHIP_SUCCESS:
      return {
        ...state,
        loading: false,
        createdMembership: action.payload,
      };
    case CREATE_MEMBERSHIP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// getMembershipReducer.js



export const getMembershipReducer = (state = {membership: []}, action) => {
  switch (action.type) {
    case GET_MEMBERSHIP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MEMBERSHIP_SUCCESS:
      return {
        ...state,
        loading: false,
        membership: action.payload,
      };
    case GET_MEMBERSHIP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


  const initialUpdateState = {
    loading: false,
    success: false,
    error: null,
    trainer:[],
    members: [],
    calender:[]
  };
  

  export const getActiveMembers = (state = {}, action) => {
    switch (action.type) {
      case GET_MEMBER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_MEMBER_SUCCESS:
        return {
          ...state,
          loading: false,
          members: action.payload,
        };
      case GET_MEMBER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };



  export const updateMembershipReducer = (state = initialUpdateState, action) => {
    switch (action.type) {
      case UPDATE_MEMBERSHIP_REQUEST:
        case DELETE_MEMBERSHIP_REQUEST:
          case DELETE_MEMBER_REQUEST:
            case DELETE_TRAINER_REQUEST:
              case DELETE_TRAINER_SCHEDULE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_MEMBERSHIP_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
        };
        case DELETE_MEMBERSHIP_SUCCESS:
          return {
            ...state,
            loading: false,
            success: state.membership.filter((m) => m._id !== action.payload),
          };
        case DELETE_TRAINER_SUCCESS:
          return {
            ...state,
            loading: false,
            success: state.trainer.filter((m) => m._id !== action.payload),
          };
          case DELETE_MEMBER_SUCCESS:
          return {
            ...state,
            loading: false,
            success: state.members.filter((m) => m._id !== action.payload),
          };
          case DELETE_TRAINER_SCHEDULE_SUCCESS:
          return {
            ...state,
            loading: false,
            success: state.calender.filter((m) => m._id !== action.payload),
          };
      case UPDATE_MEMBERSHIP_FAILURE:
        case DELETE_MEMBERSHIP_FAILURE:
          case DELETE_MEMBER_FAILURE:
            case DELETE_TRAINER_FAILURE:
              case DELETE_TRAINER_SCHEDULE_FAILURE:
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



  

  export const getFinancialData = (state = {incomedata: []}, action) => {
    switch (action.type) {
      case GET_MONTHLYINCOME_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_MONTHLYINCOME_SUCCESS:
        return {
          ...state,
          loading: false,
          incomedata: action.payload,
        };
      case GET_MONTHLYINCOME_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const initialMonthlyIncomestate = {
    loading: false,
    success: false,
    error: null,
    incomedata: null
  };
  

  export const getMonthlyIncomeData = (state = initialMonthlyIncomestate, action) => {
    switch (action.type) {
      case GET_MONTHLYINCOMECHART_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_MONTHLYINCOMECHART_SUCCESS:
        return {
          ...state,
          loading: false,
          incomedata: action.payload,
        };
      case GET_MONTHLYINCOMECHART_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const initialTrainerstate = {
    tloading: false,
    terror: null,
    ttrainer: null
  };

  
  export const getTrainerdata = (state = initialTrainerstate, action) => {
    switch (action.type) {
      case GET_TRAINER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_TRAINER_SUCCESS:
        return {
          ...state,
          loading: false,
          ttrainer: action.payload,
        };
      case GET_TRAINER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };


  const initialCreateTrainerState = {
    loading: false,
    trainer: null,
    error: null,
  };
  
  export const createTrainerReducer = (state = initialCreateTrainerState, action) => {
    switch (action.type) {
      case CREATE_TRAINER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_TRAINER_SUCCESS:
        return {
          ...state,
          loading: false,
          trainer: action.payload,
        };
      case CREATE_TRAINER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  