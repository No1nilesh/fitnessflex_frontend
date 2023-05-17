import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {forgotPasswordReducer, profileReducer, userReducer, membershipReducer } from './reducers/userReducer'
import { createMembershipReducer, updateMembershipReducer, getMembershipReducer, getActiveMembers, getFinancialData 
  , getMonthlyIncomeData , createTrainerReducer, getTrainerdata} from "./reducers/adminReducer";
import {createMemberReducer, fetchMemberReducer} from "./reducers/paymentReducer";
import {loadTrainerReducer, loadAssignedMemberReducer, createprivateworkoutReducer ,loadPrivateworkout , 
  Deletepvworkout, loadSchedule, createtrainershcedule , updateSchedule, createprivatedietReducer, Deletepvdiet, loadPrivatediet , loadcountdata} from "./reducers/trainerReducer"
import {getmemberpvworkout , getmemberpvdiet} from "./reducers/memberReducer"

const rootReducer  = combineReducers({
    user: userReducer,
    usermembership:membershipReducer,
    getallmember:getActiveMembers,
    profile: profileReducer,
    forgot:forgotPasswordReducer,
    createmem:createMembershipReducer,
    getmembership:getMembershipReducer,
    updatemembership:updateMembershipReducer, 
    createMember: createMemberReducer,
    fetchmember: fetchMemberReducer,
    fetchIncome:getFinancialData,
    fetchMonthlyIncome : getMonthlyIncomeData,
    createnewtrainer: createTrainerReducer,
    fetchTrainers : getTrainerdata,
    loadTrainer : loadTrainerReducer,
    loadAssign : loadAssignedMemberReducer,
    createprivateworkout: createprivateworkoutReducer,
    fetchPrivateworkout : loadPrivateworkout,
    deletepv : Deletepvworkout,
    getpvwork : getmemberpvworkout,
    fetchPrivatediet : loadPrivatediet,
    deletepvdiet : Deletepvdiet,
    createpvdiet : createprivatedietReducer,
    getschedule : loadSchedule,
    createschedule : createtrainershcedule,
    updateschedule : updateSchedule,
    loadcount : loadcountdata,
    getpvtdiet : getmemberpvdiet,
  });

let initialState = {
    
};

const middleware = [thunk]; 

const store = createStore(
    rootReducer ,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store