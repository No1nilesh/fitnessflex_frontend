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
GET_TRAINER_SCHEDULE_REQUEST,
GET_TRAINER_SCHEDULE_SUCCESS,
GET_TRAINER_SCHEDULE_FAILURE,
CLEAR_ERROR,
CREATE_TRAINER_SCHEDULE_REQUEST,
CREATE_TRAINER_SCHEDULE_SUCCESS,
CREATE_TRAINER_SCHEDULE_FAILURE,
UPDATE_TRAINER_SCHEDULE_REQUEST,
UPDATE_TRAINER_SCHEDULE_SUCCESS,
UPDATE_TRAINER_SCHEDULE_FAILURE,
CREATE_PRIVATE_DIET_REQUEST,
CREATE_PRIVATE_DIET_SUCCESS,
CREATE_PRIVATE_DIET_FAILURE,
GET_PRIVATE_DIET_REQUEST,
GET_PRIVATE_DIET_SUCCESS,
GET_PRIVATE_DIET_FAILURE,
DELETE_PRIVATE_DIET_REQUEST,
DELETE_PRIVATE_DIET_SUCCESS,
DELETE_PRIVATE_DIET_FAILURE,
GET_COUNT_REQUEST,
GET_COUNT_SUCCESS,
GET_COUNT_FAILURE
} from "../constants/trainerConstant"


let initialGetState={}

export const loadTrainerReducer = (state = initialGetState, action) => {
    switch (action.type) {
      case FETCH_TRAINER_DETAILS_REQUEST:
        return {
          ...state,
          tloading: true,
        };
      case FETCH_TRAINER_DETAILS_SUCCESS:
        return {
          ...state,
          tloading: false,
          trainer: action.payload,
        };
      case FETCH_TRAINER_DETAILS_FAILURE:
        return {
          ...state,
          tloading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };


  export const loadAssignedMemberReducer = (state = {member:[]}, action) => {
    switch (action.type) {
      case GET_TRAINER_AMEMBER_REQUEST:
        return {
          ...state,
          aloading: true,
        };
      case GET_TRAINER_AMEMBER_SUCCESS:
        return {
          ...state,
          aloading: false,
          member: action.payload,
        };
      case GET_TRAINER_AMEMBER_FAILURE:
        return {
          ...state,
          aloading: false,
          aerror: action.payload,
        };
      default:
        return state;
    }
  };

  const initialState = {
    loading: false,
    workout: null,
    error: null,
  };


  export const createprivateworkoutReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_PRIVATE_WORKOUT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_PRIVATE_WORKOUT_SUCCESS:
        return {
          ...state,
          loading: false,
          workout: action.payload,
        };
      case CREATE_PRIVATE_WORKOUT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case CLEAR_ERROR:
          return {
            ...state,
          error:null
          }
      default:
        return state;
    }
  };
  
  let initst={}
  //private workout
  export const loadPrivateworkout = (state = initst, action) => {
    switch (action.type) {
      case GET_PRIVATE_WORKOUT_REQUEST
      
      :
        return {
          ...state,
          tloading: true,
        };
      case GET_PRIVATE_WORKOUT_SUCCESS:
        return {
          ...state,
          tloading: false,
          pvworkout: action.payload,
        };
      case GET_PRIVATE_WORKOUT_FAILURE:
        return {
          ...state,
          tloading: false,
          error: action.payload,
        };
        case CLEAR_ERROR:
          return {
            ...state,
          error:null
          }
      default:
        return state;
    }
  };

  const initialDELETEState={
    workout:[],
    loading: false,
    success: false,
  }


  export const Deletepvworkout = (state = initialDELETEState, action) => {
    switch (action.type) {
      case DELETE_PRIVATE_WORKOUT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_PRIVATE_WORKOUT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: state.workout.filter((m) => m._id !== action.payload),
        };
      case DELETE_PRIVATE_WORKOUT_FAILURE:
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

  export const loadSchedule = (state = {calender:[]}, action) => {
    switch (action.type) {
      case GET_TRAINER_SCHEDULE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_TRAINER_SCHEDULE_SUCCESS:
        return {
          ...state,
          loading: false,
          calender: action.payload,
        };
      case GET_TRAINER_SCHEDULE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case CLEAR_ERROR:
          return {
            ...state,
          error:null
          }
      default:
        return state;
    }
  };


  export const createtrainershcedule = (state = {}, action) => {
    switch (action.type) {
      case CREATE_TRAINER_SCHEDULE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_TRAINER_SCHEDULE_SUCCESS:
        return {
          ...state,
          loading: false,
          calender: action.payload,
        };
      case CREATE_TRAINER_SCHEDULE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case CLEAR_ERROR:
          return {
            ...state,
          error:null
          }
      default:
        return state;
    }
  };
  

  export const updateSchedule = (state = {}, action) => {
    
    switch (action.type) {
    case UPDATE_TRAINER_SCHEDULE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_TRAINER_SCHEDULE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
        };
        
      case UPDATE_TRAINER_SCHEDULE_FAILURE:
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


  
//diets


export const createprivatedietReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PRIVATE_DIET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PRIVATE_DIET_SUCCESS:
      return {
        ...state,
        loading: false,
        diet: action.payload,
      };
    case CREATE_PRIVATE_DIET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case CLEAR_ERROR:
        return {
          ...state,
        error:null
        }
    default:
      return state;
  }
};


//private workout
export const loadPrivatediet = (state = {}, action) => {
  switch (action.type) {
    case GET_PRIVATE_DIET_REQUEST
    
    :
      return {
        ...state,
        tloading: true,
      };
    case GET_PRIVATE_DIET_SUCCESS:
      return {
        ...state,
        tloading: false,
        tdiet: action.payload,
      };
    case GET_PRIVATE_DIET_FAILURE:
      return {
        ...state,
        tloading: false,
        error: action.payload,
      };
      case CLEAR_ERROR:
        return {
          ...state,
        error:null
        }
    default:
      return state;
  }
};

const initialDeleteState={
  diet:[],
  loading: false,
  success: false,
}


export const Deletepvdiet = (state = initialDeleteState, action) => {
  switch (action.type) {
    case DELETE_PRIVATE_DIET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PRIVATE_DIET_SUCCESS:
      return {
        ...state,
        loading: false,
        success: state.diet.filter((m) => m._id !== action.payload),
      };
    case DELETE_PRIVATE_DIET_FAILURE:
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


export const loadcountdata = (state = {}, action) => {
  switch (action.type) {
    case GET_COUNT_REQUEST
    
    :
      return {
        ...state,
        tloading: true,
      };
    case GET_COUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        count: action.payload,
      };
    case GET_COUNT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case CLEAR_ERROR:
        return {
          ...state,
        error:null
        }
    default:
      return state;
  }
};