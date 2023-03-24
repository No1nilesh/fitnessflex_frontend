import {CLEAR_ERROR, LOGIN_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST,
     REGISTER_SUCCESS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGOUT_USER_FAIL, LOGOUT_USER_SUCCESS} from "../constants/userConstant";


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