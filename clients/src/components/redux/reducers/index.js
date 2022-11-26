import { combineReducers } from "redux";
import paraReducers from "./paraReducers";
import restoReducers from "./restoReducers";
import contactReducers from "./contactReducers";


export const rootReducer = combineReducers({
     paraReducers,
     restoReducers,
     contactReducers

 
})
